import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/calcular",
    name: "Calcular",
    component: () =>
      import(/* webpackChunkName: "calcular" */ "../views/Calcular.vue")
  },
  {
    path: "/rutas/:id",
    name: "Rutas",
    component: () =>
      import(/* webpackChunkName: "rutas" */ "../views/Rutas.vue")
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: () => import(/* webpackChunkName: "vuex" */ "../views/Vuex.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
