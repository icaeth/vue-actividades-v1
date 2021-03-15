const random = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};
export default {
  namespaced: true,
  state: {
    locaciones:[],
    currentGold: 0,
    farmLevel: 1,
    caveLevel: 1,
    houseLevel: 1,
    casinoLevel: 1,
    farmMin: 10,
    caveMin: 5,
    houseMin: 1,
    casinoMin: 1,
    farmMax: 20,
    caveMax: 10,
    houseMax: 5,
    casinoMax: 50,
    farmPressed: false,
    cavePressed: false,
    housePressed: false,
    farmUpgrade: 50,
    caveUpgrade: 25,
    houseUpgrade: 25,
    casinoUpgrade: 150,
    casinoAnimation: '',
    pepe: ''
  },
  mutations: {
    SET_INCREMENT(state, payload) {
      if (Math.random() < 0.5) {
        state.currentGold = state.currentGold + payload;
      } else {
        state.currentGold = state.currentGold - payload;
      }
      state.farmPressed = true;
    },
    SET_INCREMENT_2(state, payload) {
      if (Math.random() < 0.5) {
        state.currentGold = state.currentGold + payload;
      } else {
        state.currentGold = state.currentGold - payload;
      }
      state.cavePressed = true;
    },
    SET_INCREMENT_3(state, payload) {
      state.currentGold = state.currentGold + payload;
      state.housePressed = true;
    },
    SET_INCREMENT_4(state, payload) {
      if (Math.random() < 0.5) {
        state.currentGold = state.currentGold + payload;
        state.casinoAnimation = "win";
      } else {
        state.currentGold = state.currentGold - payload;
        state.casinoAnimation = "loss";
      }
      state.farmPressed = false;
      state.cavePressed = false;
      state.housePressed = false;
    },
    SET_UPGRADE(state) {
      state.currentGold = state.currentGold - state.farmUpgrade
      state.farmUpgrade = 100
    }
  },
  actions: {
    farmClick({ state, commit }, payload) {
      if (state.currentGold >= 20) {
        commit("SET_INCREMENT", random(payload.min, payload.max));
      }
    },
    caveClick({ state, commit }, payload) {
      if (state.currentGold >= 5) {
        commit("SET_INCREMENT_2", random(payload.min, payload.max));
      }
    },
    houseClick({ commit }, payload) {
      commit("SET_INCREMENT_3", random(payload.min, payload.max));
    },
    casinoClick({ commit, state }, payload) {
      if (
        state.farmPressed === true &&
        state.cavePressed === true &&
        state.housePressed === true &&
        state.currentGold >= 50
      ) {
        commit("SET_INCREMENT_4", random(payload.min, payload.max));
      }
    },
    farmUpgrade({ state, commit }) {

      if (state.currentGold >= state.farmUpgrade) {
        commit("SET_UPGRADE")
      }
    },
  },
  getters: {
    
  }
};
