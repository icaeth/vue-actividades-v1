const random = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};
const axios = require("axios").default;
export default {
  namespaced: true,
  state: {
    locations: [],
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
    casinoAnimation: "",
    pepe: ""
  },
  mutations: {
    SET_LOCATIONS(state, locations) {
      state.locations = locations;
    },
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
      state.currentGold = state.currentGold - state.farmUpgrade;
      state.farmUpgrade = Object.values(state.locations[0].costUpgrade)[state.farmLevel];
      state.farmLevel++
      state.farmMax = Object.values(state.locations[0].goldEarn)[state.farmLevel-1];
      state.farmMin = Object.values(state.locations[0].goldLost)[state.farmLevel-1];
    },
    SET_UPGRADE_2(state) {      
      state.currentGold = state.currentGold - state.caveUpgrade;
      state.caveUpgrade = Object.values(state.locations[1].costUpgrade)[state.caveLevel];
      state.caveLevel++
      state.caveMax = Object.values(state.locations[1].goldEarn)[state.caveLevel-1];
      state.caveMin = Object.values(state.locations[1].goldLost)[state.caveLevel-1];
    },
    SET_UPGRADE_3(state) {      
      state.currentGold = state.currentGold - state.houseUpgrade;
      state.houseUpgrade = Object.values(state.locations[2].costUpgrade)[state.houseLevel];
      state.houseLevel++
      state.houseMax = Object.values(state.locations[2].goldEarn)[state.houseLevel-1];
      state.houseMin = Object.values(state.locations[2].goldLost)[state.houseLevel-1];
    },
    SET_UPGRADE_4(state) {      
      state.currentGold = state.currentGold - state.casinoUpgrade;
      state.casinoUpgrade = Object.values(state.locations[3].costUpgrade)[state.casinoLevel];
      state.casinoLevel++
      state.casinoMax = Object.values(state.locations[3].goldEarn)[state.casinoLevel-1];
      state.casinoMin = Object.values(state.locations[3].goldLost)[state.casinoLevel-1];
    }

  },
  actions: {
    getLocations({ commit }) {
      axios
        .get(
          "https://my-json-server.typicode.com/icaeth/vue-actividades-v1/locaciones"
        )
        .then(response => {
          commit("SET_LOCATIONS", response.data);
        });
    },
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
        commit("SET_UPGRADE");
      }
    },
    caveUpgrade({ state, commit }) {
      if (state.currentGold >= state.caveUpgrade) {
        commit("SET_UPGRADE_2");
      }
    },
    houseUpgrade({ state, commit }) {
      if (state.currentGold >= state.houseUpgrade) {
        commit("SET_UPGRADE_3");
      }
    },
    casinoUpgrade({ state, commit }) {
      if (state.currentGold >= state.casinoUpgrade) {
        commit("SET_UPGRADE_4");
      }
    },
    setScore({ state, commit }, payload) {
      axios.post("https://168.119.171.187:4400/scores", payload);
    },
    getScore({ state, commit }) {}
  },
  getters: {}
};
