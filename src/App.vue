<template>
  <div id="app">
    <div class="tarea">
      <p>
        <router-link to="/">
          Home
        </router-link>
        <router-link to="/calcular">
          Calcular
        </router-link>
        <router-link to="/rutas/0">
          Rutas
        </router-link>
        <router-link to="/filtros">
          Filtros
        </router-link>
        <router-link to="/vuex">
          Vuex
        </router-link>
        <router-link to="/mutaciones">
          Mutaciones
        </router-link>
        <router-link to="/pokevuex">
          PokeVuex
        </router-link>
        <router-link to="/buscadorGold">
          Buscador Gold
        </router-link>
        <router-link to="/trabajoFinal">
          Trabajo Final
        </router-link>
        <router-link to="/relojvue">
          Reloj Vue
        </router-link>
        <router-link to="/prueba">
          Prueba
        </router-link>
      </p>
      <router-view />
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
a{
  padding: 0.5rem;
  font-size: 1.5rem;
}
</style>
