import Vue from "vue";
import Vuex from "vuex";
import pokeStore from "./modules/pokeStore";
import goldStore from "./modules/goldStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0,
    msg: false,
    students: [{}]
  },
  mutations: {
    SET_INCREMENT(state) {
      state.score++;
    },
    SET_DECREMENT(state) {
      state.score--;
    },
    SET_CUSTOM_INCREMENT(state, payload) {
      state.score = payload;
    },
    ADD_STUDENT(state, payload) {
      state.students.push(payload);
    }
  },
  actions: {},
  modules: {
    pokeStore,
    goldStore
  },
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
