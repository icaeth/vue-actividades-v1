import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueAwesomeCountdown from 'vue-awesome-countdown'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

Vue.config.productionTip = false;
Vue.use(vueAwesomeCountdown, 'vac')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
