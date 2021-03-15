<template>
  <div>
    <div class="card">
      <div class="title">
        <h1>{{ title }}</h1>
      </div>
      <div class="earning">
        <p>(earns/takes {{ earningMin }}-{{ earningMax }} golds)</p>
      </div>
      <!-- <ProgressBar /> -->
      <button
        class="button"
        @click="click"
      >
        Find Gold!
      </button>
      <button
        class="button2"
        @click="upgrade"
      >        
        <div
          class="bar"
          :style="{ width: goldPercentage + '%'}"
        />
        <p class="p-max">
          Upgrade: {{ upgradeCost }}
        </p>
      </button>
    </div>
  </div>
</template>

<script>
/* import ProgressBar from "./ProgressBar"; */


export default {
  components: {
    /* ProgressBar */
    
  },
  props: {
    title: {
      type: String,
      default: "Farm"
    },
    earningMin: {
      type: Number,
      default: 0
    },
    earningMax: {
      type: Number,
      default: 0
    },
    upgradeCost: {
      type: Number,
      default: 100
    },
    currentGold:{
      type: Number,
      default: 0
    }
  },
  computed: {
    goldPercentage() {
      let valor = ((this.currentGold * 100) / this.upgradeCost)
      if(valor >= 100){
        valor = 100
      }        
      return valor
    }
  },
  methods: {
    click() {
      this.$emit("click");
    },
    upgrade() {      
      this.$emit("upgrade");      
    }
  }
};
</script>

<style lang="scss" scoped>
progress {
  width: 100px;
  color: red;
}
.card {
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 300px;
  border: 5px solid black;
}
.button {
  position: relative;
  margin: 2rem;
  width: 130px;
  height: 50px;
  margin-top: 0;
  padding: 0.5rem 1rem;
  border: 5px solid black;
  background-color: goldenrod;
  color: white;
  cursor: pointer;  

  &:hover {
    background-color: gold;
    color: black;
  }
  &:active {
    background-color: #dbe67a;
    transform: translateY(4px);
  }
}

.p-max{      
      text-align: center;
      font-size: 0.8rem;
      z-index: 5;
      mix-blend-mode: color-burn;      
    }

.button2 {
  position: relative;
  margin: 2rem;
  width: 130px;
  height: 50px;
  margin-top: 0;
  padding: 0.5rem 1rem;
  border: 5px solid black;  
  color: black;
  cursor: pointer;

  .bar{
    position: absolute;
    background-color: goldenrod;
    height: 40px;    
    left: 0;    
    top: 0;
  }  

  &:hover {
    background-color: gold;
    color: black;
  }
  &:active {
    background-color: #dbe67a;
    transform: translateY(4px);
  }
}
</style>
