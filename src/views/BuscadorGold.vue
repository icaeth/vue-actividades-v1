<template>
  <div class="gentle-flex">
    <div class="container">
      <h1>Buscador de Oro</h1>

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
        />
        <Card
          title="Cave"
          :earning-min="caveMin"
          :earning-max="caveMax"
          :upgrade-cost="caveUpgrade"
          :current-gold="currentGold"
          @click="handleClick('Cave')"
        />
        <Card
          title="House"
          :earning-min="houseMin"
          :earning-max="houseMax"
          :upgrade-cost="houseUpgrade"
          :current-gold="currentGold"
          @click="handleClick('House')"
        />
        <Card
          title="Casino"
          :earning-min="casinoMin"
          :earning-max="casinoMax"
          :upgrade-cost="casinoUpgrade"
          :current-gold="currentGold"
          @click="handleClick('Casino')"
        />
      </div>

      <div class="goldLog">
        <p>
          <!-- {{ action }} {{ amount }} golds from the {{ location }} {{ status }}
        {{ timestamp }} -->
        </p>
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

export default {
  components: {
    Card
  },
  data() {
    return {};
  },  
  computed: {
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
    ...mapGetters([])
  },
  mounted(){
    this.$store.dispatch("goldStore/getLocations");
    this.$store.dispatch("goldStore/setScore");
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
            msg: 'hola'
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
    }
  },      
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1000px;
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
</style>
