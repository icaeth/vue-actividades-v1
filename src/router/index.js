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
  },
  {
    path: "/filtros",
    name: "Filtros",
    component: () =>
      import(/* webpackChunkName: "vuex" */ "../views/Filtros.vue")
  },
  {
    path: "/pokevuex",
    name: "PokeVuex",
    component: () =>
      import(/* webpackChunkName: "pokevuex" */ "../views/PokeVuex.vue")
  },
  {
    path: "/buscadorGold",
    name: "BuscadorGold",
    component: () =>
      import(/* webpackChunkName: "pokevuex" */ "../views/BuscadorGold.vue")
  },
  {
    path: "/mutaciones",
    name: "Mutaciones",
    component: () =>
      import(/* webpackChunkName: "pokevuex" */ "../views/Mutaciones.vue")
  },
  {
    path: "/trabajoFinal",
    name: "Trabajo Final",
    component: () =>
      import(/* webpackChunkName: "pokevuex" */ "../views/TrabajoFinal.vue")
  },
  {
    path: "/prueba",
    name: "Prueba",
    component: () =>
      import(/* webpackChunkName: "pokevuex" */ "../components/Prueba.vue")
  }
  
];

const router = new VueRouter({
  routes
});

export default router;
