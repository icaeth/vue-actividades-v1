<template>
  <div>
    <ScoreBoard />
    <div id="game">
      <form
        class="options"
        @submit.prevent="prepareNewGame"
      >
        Tamaño <input
          v-model.number="fieldSize"
          class="number-input"
          :min="fieldSizeMin"
          :max="fieldSizeMax"
          :placeholder="fieldSizeDefault"
          type="number"
        > <button class="start">
          Iniciar
        </button>
      </form>
      <h2 class="game-state">
        Buscaminas
      </h2>
      <p>{{ bombStateText }}</p>
      <!-- TODO: que respire -->
      <Minefield
        :minefield="minefield"
        @onCellLeftClicked="onCellClicked"
        @onCellRightClicked="onCellFlagged"
      />
    </div>
    <div
      v-if="lossAnimation"
      class="loseGif"
    >
      <img
        src="@/assets/evilwins.gif"
        alt=""
      >
    </div>     
    <div
      v-else-if="winAnimation"
      class="loseGif"
    >
      <img
        src="@/assets/goodwins.gif"
        alt=""
      >
    </div>      
  </div>
</template>

<script>
import Minefield from '@/components/Minefield'
  import ScoreBoard from '@/components/ScoreBoard'
  export default {
    components: {
      ScoreBoard,
      Minefield
    },
    props: {
        bombIcon: {
            type: String,
            default: "💣"
        },
        flagIcon: {
            type: String,
            default: "❗" 
        },        
    },    
    data() {
        return {
            fieldSizeDefault: 10,
            fieldSizeMin: 5,
            fieldSizeMax: 50,
            fieldSize: 10,            
            minefield: [[{
                x: 0,
                y: 0,
                isBomb: false,
                isRevealed: false,
                isMarked: false,
                proximityCount: 0
            }]],
            firstClickHappened: false,
            bombList: [],
            amountOfCellsMarked: 0,
            amountOfBombs: 0,
            gameOver: false,
            gameStateText: "",
            lossAnimation: false,
            winAnimation: false
        }
    },
    computed: {
        bombStateText() {
            return this.amountOfCellsMarked + " " + this.flagIcon +  " / " + this.amountOfBombs + " " + this.bombIcon
        }
    },
    created() {
        this.prepareNewGame()
    },
    methods: {        
        prepareNewGame() {
            // Resetea las variables
            this.gameOver = false
            this.firstClickHappened = false
            this.minefield.splice(0)
            this.bombList.splice(0)
            this.amountOfCellsMarked = 0
            this.lossAnimation = false
            this.winAnimation = false

            // Envía un mensaje de bienvenida
            this.gameStateText = this.startText

            // Guarda el tamaño del tablero
            this.size = this.fieldSize
            
            const amountOfCells = this.size * this.size
            // Determina el número de bombas (20%)
            this.amountOfBombs = Math.round(amountOfCells * .20)
            
            console.log(this.amountOfBombs + " / " + amountOfCells + " cells will be bombs.")

            // Crea un campo vacio
            for (let x = 0; x < this.size; x++) {
                this.$set(this.minefield, x, [])
                for (let y = 0; y < this.size; y++) {
                    // y en cada uno de los cuadros les setea valores
                    this.$set(this.minefield[x], y,  {
                        x: x,
                        y: y,
                        isBomb: false,
                        isRevealed: false,
                        isMarked: false,
                        proximityCount: 0
                    })
                }
            }
        },
        placeMines(excludeCoord) {
            console.log("Creando Tablero (" + this.size + " x " + this.size + ") ...")

            // array con las coordenadas
            let coords = []

            // Llenar array de coordenadas según el tamaño del tablero
            for (let x = 0; x < this.size; x++) {
                for (let y = 0; y < this.size; y++) {
                    if (excludeCoord.x != x || excludeCoord.y != y) {
                        // Guarda las coordenadas en un array linear, como objeto
                        coords.push({x: x, y: y})
                    }
                }
            }

            // shuufle de las coordenadas para ponerlas al azar
            shuffle(coords)
            
            // Primero ubicar las bombas
            let amountOfBombLeftToPlace = this.amountOfBombs
            // Y para eso se hace un while
            while (amountOfBombLeftToPlace > 0 && coords.length > 0) {
                // Toma una coordenada al azar
                const selectedCoord = coords.pop()                
                let bombCell = this.minefield[selectedCoord.x][selectedCoord.y]
                // Le asigna una bomba
                bombCell.isBomb = true
                // se guarda en una lista de bombas para verificarla al clickear
                this.bombList.push(bombCell)
                // Se resta del total hasta que se asignan todas
                amountOfBombLeftToPlace--
            }

            // Y esto permite determinar que tan cerca se está de una bomba
            for (let b = 0; b < this.bombList.length; b++) {
                const bombCell = this.bombList[b]
                this.doForAdjecentCells(bombCell, function(adjecentCell) {
                    // Y si está cerca de una aumenta el valor en 1
                    adjecentCell.proximityCount++
                })
            }
        },
        onCellClicked(coord) {
            this.onCellMined(coord)            
        },
        onCellMined(coord) {
            if (!this.firstClickHappened) {
                this.firstClickHappened = true
                this.placeMines(coord)
            }

            let cell = this.minefield[coord.x][coord.y]
            if (!this.gameOver && cell !== undefined) {                
                
                cell.isRevealed = true

                // If it is a bomb
                if (cell.isBomb) {
                    // Game over
                    this.setGameOver()
                    return
                }

                // If it is an empty cell, clear all adjecent cells
                if (cell.proximityCount == 0) {
                    this.gameStateText = this.emptyCellText
                    const vm = this
                    const closure = function(adjecentCell) {
                        if (!adjecentCell.isRevealed) {
                            // If marked, remove the mark
                            if (adjecentCell.isMarked) {
                                adjecentCell.isMarked = false
                                vm.amountOfCellsMarked--
                            }
                            // Reveal the tile
                            adjecentCell.isRevealed = true
                            // Repeat for that cell if it is also a blank
                            if (adjecentCell.proximityCount == 0) {
                                vm.doForAdjecentCells(adjecentCell, closure)
                            }
                        }
                    }
                    vm.doForAdjecentCells(cell, closure)
                }

                // Compliment on close call
                if (cell.proximityCount > 2) {
                    this.gameStateText = this.highProxCellText
                }
            }
        },
        onCellFlagged(coord) {
            let cell = this.minefield[coord.x][coord.y]
            if (!this.gameOver && cell !== undefined) {
                if (cell.isRevealed) {
                    return console.log("No se puede poner la bandera: " + coord.x + ", " + coord.y)
                }
                console.log("Quitar Bandera: " + coord.x + ", " + coord.y + "...")
                cell.isMarked = !cell.isMarked
                this.amountOfCellsMarked += (cell.isMarked ? 1 : -1)

                // Chequea si todas las bombas están marcadas
                let allBombsMarked = true
                for (let b = 0; b < this.bombList.length; b++) {
                    if (!this.bombList[b].isMarked) {
                        allBombsMarked = false
                        break
                    }
                }
                // Si todas las bombas tienen flags y además el número de bombas = el número de flags
                if (this.firstClickHappened && this.bombList.length == this.amountOfCellsMarked && allBombsMarked) {
                    
                    this.setGameWon()
                }
            }
        },
        // Método para calcular el spread
        doForAdjecentCells(middleCell, closure) {
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    // Calcula las coordenadas adyacentes
                    const adjecentX = middleCell.x + i
                    const adjecentY = middleCell.y + j

                    // Revisa si la celda está en el borde
                    if (adjecentX >= 0 && adjecentX < this.size
                        && adjecentY >= 0 && adjecentY < this.size) {
                            // Ejecuta lo solicitado
                            closure(this.minefield[adjecentX][adjecentY])
                    }
                }
            }
        },
        // Perdida de juego
        setGameOver() {
            this.gameOver = true
            // Revela las bombas
            for (let b = 0; b < this.bombList.length; b++) {
                this.bombList[b].isRevealed = true
            }

            this.lossAnimation = true
        },
        //Victoria
        setGameWon() {
            this.gameOver = true
            // Revela el tablero
             for (let x = 0; x < this.size; x++) {
                for (let y = 0; y < this.size; y++) {
                    let cell = this.minefield[x][y]
                    cell.isRevealed = cell.isBomb ? false : true
                }
            }
            this.winAnimation = true
        }
    }
}

// Asignar elementos

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // Mientras queden elementos por asignar...
  while (0 !== currentIndex) {

    // Se toma un elemento al azar...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Y se le asigna con el que existe.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
    
  }
</script>

<style lang="scss" scoped>

#game {
    text-align: center;
}

#minefield {
    position: absolute;
    top: 280px;
    width: calc(100%-16px);
    left: 8px;
    right: 8px;
    min-height: calc(100%-180px);
    height: calc(100%-180px);
    bottom: 50px;
}

#mine-mode-switch {
    position: absolute;
    bottom: 16px;
    left: 8px;
    right: 8px;
}

p {
    margin: 0;
    font-size: .9em;
}

.game-state {
    margin: 10px 0 0 0;
}

.number-input {
    border: 1px solid #eee;
    padding: 4px 10px;
    border-radius: 2px;
    width: 80px;
    margin: 0 12px;
}

.loseGif{  
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 25rem;    
  width: 50%;   
  img{
    z-index: 2;
  }
}

</style>