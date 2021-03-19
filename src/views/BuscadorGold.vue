<template>
  <div class="gentle-flex">
    <div class="container">
      <h1>Buscador de Oro</h1>
      <Countdown
        ref="countdown"
        @elFinal="elFinal"
      />
      <h4>Tú Oro: {{ currentGold }}</h4>
      

      <div class="card_container">
        <Card
          title="Farm"
          :earning-min="farmMin"
          :earning-max="farmMax"
          :upgrade-cost="farmUpgrade"
          :current-gold="currentGold"          
          @click="handleClick('Farm')"
          @upgrade="handleUpgrade('Farm')"
        >
          <ProgressBar :reload="0.1" />
        </Card>
        <Card
          
          title="Cave"
          :earning-min="caveMin"
          :earning-max="caveMax"
          :upgrade-cost="caveUpgrade"          
          :current-gold="currentGold"
          @click="handleClick('Cave')"
          @upgrade="handleUpgrade('Cave')"
        >
          <ProgressBar :reload="0.5" />
        </Card>        
        <Card
          title="House"
          :earning-min="houseMin"
          :earning-max="houseMax"
          :upgrade-cost="houseUpgrade"
          :current-gold="currentGold"          
          @click="handleClick('House')"
          @upgrade="handleUpgrade('House')"
        >
          <ProgressBar />
        </Card>
        <Card
          title="Casino"
          :earning-min="casinoMin"
          :earning-max="casinoMax"
          :upgrade-cost="casinoUpgrade"
          :current-gold="currentGold"
          @click="handleClick('Casino')"
          @upgrade="handleUpgrade('Casino')"
        >
          <ProgressBar />
        </Card>
      </div>
      <div class="insertName">
        <label for="nickName">Elige un nick: </label>
        <input
          id="nickName"
          v-model="nickName"
          type="text"          
        >
        <span> y presiona: </span>
        <button @click="setPlayerScore()">
          Start
        </button>
      </div>
      <div class="goldLog">
        <h2 style="text-align: center">
          Top Players
        </h2>
        <div class="titles">
          <span class="span-left"><strong> Player </strong></span>             
          <span class="span-right"><strong> Score </strong></span>
        </div>
        <div
          v-for="player in tables"
          :key="player.index"
          class="players titles"
        >
          <span class="span-left">{{ player.nick }}</span>             
          <span class="span-right">{{ player.score }}</span>             
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import Card from "../components/Card";
import Countdown from "../components/Countdown";
import ProgressBar from "../components/ProgressBar";
const axios = require("axios").default;

export default {
  components: {
    Card,
    Countdown,
    ProgressBar
  },
  data() {
    return {
      players: [],
      nickName: ''
    };
  },  
  computed: {
    tables() {
        let table = this.players
        return table.sort(function(a,b){
          return b.score - a.score
        })
    },
    ...mapState("goldStore", [
      "currentGold",
      "farmMin",
      "caveMin",
      "houseMin",
      "casinoMin",
      "farmMax",
      "caveMax",
      "houseMax",
      "casinoMax",
      "farmUpgrade",
      "caveUpgrade",
      "houseUpgrade",
      "casinoUpgrade"
    ]),
    ...mapGetters([]),
  },
  mounted(){
    this.$store.dispatch("goldStore/getLocations");      
    },
  created(){
    let r = []
  axios.get('https://168.119.171.187:4400/scores')      
  .then(function (response) {    
    r = response.data;    
  })
  .then(() => {    
    this.players = r    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  },  
  methods: { 
    //also supports payload `this.nameOfAction(amount)`
    ...mapActions([
      "goldStore",
      ["farmClick", "caveClick", "houseClick", "casinoClick", "getLocations", "setScore"]
    ]),
    ...mapMutations(["nameOfMutation"]),
    handleClick(value) {
      switch (value) {
        case "Farm":
          this.$store.dispatch("goldStore/farmClick", {
            min: this.farmMin,
            max: this.farmMax
          });
          break;
        case "Cave":
          this.$store.dispatch("goldStore/caveClick", {
            min: this.caveMin,
            max: this.caveMax
          });
          break;
        case "House":
          this.$store.dispatch("goldStore/houseClick", {
            min: this.houseMin,
            max: this.houseMax
          });
          break;
        case "Casino":
          this.$store.dispatch("goldStore/casinoClick", {
            min: this.casinoMin,
            max: this.casinoMax
          });
          break;
        default:
          break;
      }
    },
    handleUpgrade(value) {
      switch (value) {
        case "Farm":
          this.$store.dispatch("goldStore/farmUpgrade", {
          });
          break;
        case "Cave":
          this.$store.dispatch("goldStore/caveUpgrade", {            
          });
          break;
        case "House":
          this.$store.dispatch("goldStore/houseUpgrade", {            
          });
          break;
        case "Casino":
          this.$store.dispatch("goldStore/casinoUpgrade", {            
          });
          break;
        default:
          break;
      }
    },
    setPlayerScore(){      
      this.$refs.countdown.countdownF()
      },
    elFinal(){
      let r = {"nick": this.nickName, "score": this.currentGold}
      this.$store.dispatch("goldStore/setScore", r);
    }
  },      
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1000px;
}
.insertName{
  display: flex;
  margin-top: 4rem;  
  align-items: center;
  justify-content: center;
  gap: 1ch;
}
.card_container {
  display: flex;
  width: 100vw;
  gap: 3rem;
}
.goldLog {
  width: 800px;
  margin: 5rem;
  border: 5px solid black;
}

.gentle-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1ch;
}
.span-left {
margin-left: 3rem;
}
.span-right{
margin-right: 3rem;
}
.titles{
  display: flex;
  justify-content: space-between;
}
h4{
  margin-left: 1ch;
}
</style>
