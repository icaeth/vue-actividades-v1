import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0,
    msg: false
  },
  mutations: {
    increment(state) {
      state.score++;
    },
    decrement(state) {
      state.score--;
    },
    customIncrement(state, payload) {
      state.score = payload;
    }
  },
  actions: {},
  modules: {},
  getters: {
    over9: state => {
      if (state.score > 9000) {
        state.msg = true;
      } else {
        state.msg = false;
      }
    }
  }
});
