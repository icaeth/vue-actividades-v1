<template>
  <div id="app">
    <div class="tarea">
      <p>
        <router-link to="/">Home</router-link>
        <router-link to="/calcular">Calcular</router-link>
        <router-link to="/rutas/0">Rutas</router-link>
        <router-link to="/vuex">Vuex</router-link>
      </p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
* {
  padding: 0.2rem;
  margin: 0;
  box-sizing: border-box;
}
</style>
