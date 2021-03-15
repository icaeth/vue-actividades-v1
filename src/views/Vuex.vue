<template>
  <div class="parent">
    <Hijo1 />
    <Hijo2 />
    <div>
      <h1>Score: {{ count }}</h1>
    </div>
    <div class="incrementar">
      <button @click="incrementar">
        Incrementar
      </button>
      <button @click="decrementar">
        Decrementar
      </button>
      <transition name="fade">
        <div
          v-if="storeMsg"
          class="vegeta"
        >
          <img
            src="https://media.tenor.com/images/f1d0693271bdf3259481a1e54d184673/tenor.gif"
            alt=""
            srcset=""
          >
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Hijo1 from "../components/Hijo1.vue";
import Hijo2 from "../components/Hijo2.vue";
export default {

  components: {
    Hijo1,
    Hijo2
  },
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.score;
    },
    storeMsg() {
      return this.$store.state.msg;
    }
  },
  methods: {
    incrementar() {
      this.$store.commit("SET_INCREMENT");
    },
    decrementar() {
      this.$store.commit("SET_DECREMENT");
    }
  }
};
</script>

<style lang="scss" scoped>
.parent {
  background-color: green;
  width: 400px;
  height: 300px;
  position: relative;
  padding-left: 5px;
}

h1 {
  margin-top: 0;
  color: white;
}

.incrementar {
  margin-top: 10rem;
}
.vegeta {
  display: inline;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
