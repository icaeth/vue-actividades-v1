<template>
  <div
    class="cell"
    :class="{ revealed: isRevealed }"
    @click="onCellLeftClicked"
    @click.right="onCellRightClicked"
  >
    <div
      v-show="isValueVisible"
      class="content"
    >
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
    props: {
        // eslint-disable-next-line vue/require-default-prop
        cellData: Object,
        bombIcon: {
            type: String,
            default: "💣"
        },
        flagIcon: {
            type: String,
            default: "❗" 
        }
    },
    data() {
        return {}
    },
    computed: {
        value() {
            // Revela si es una bomba o un número
            if (this.isRevealed) {
                if (this.cellData.isBomb) {
                    return this.bombIcon
                } else {
                    return this.cellData.proximityCount > 0 ? this.cellData.proximityCount : ""
                }
            }
            // Revela si está marcado o vacio
            return this.cellData.isMarked ? this.flagIcon : ""
        },
        isValueVisible() {
            return this.isRevealed || this.cellData.isMarked
        },
        isRevealed() {
            return this.cellData.isRevealed
        }
    },
    methods: {
        onCellLeftClicked() {
            this.$emit('onCellLeftClicked', {x: this.cellData.x, y: this.cellData.y})
        },
        onCellRightClicked() {
            this.$emit('onCellRightClicked', {x: this.cellData.x, y: this.cellData.y})
        }
    }
}
</script>

<style lang="scss">
.cell {    
    display: table-cell;
    position: relative;
    background-color: #eee;
    font-weight: bold;
    min-width: 24px;
    max-width: 40px;
    border: #ddd 1px solid;
}
.cell:before{
	content: "";
	display: block;
	padding-top: 100%; 	
}

.content {    
  position:  absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;    
  display: flex;
  justify-content: center;
  align-items: center;
}

.revealed {
    background-color: #fff;
}
</style>
