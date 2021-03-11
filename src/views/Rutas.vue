<template>
  <div>
    <h1>Ejemplo de Rutas</h1>
    <div class="link" v-for="ruta in rutas" :key="ruta.id">
      <router-link :to="{ path: `${ruta.id}` }">
        Router Link {{ ruta.id }}</router-link
      >
    </div>
    <div
      class="boton"
      :style="{ backgroundColor: rutas[this.$route.params.id].color }"
    >
      Hola desde ruta {{ rutas[this.$route.params.id].id }}
    </div>
    <label for="colorPicker">Elija un color</label
    ><input id="colorPicker" type="color" /><button
      @click="addRoute(colorPicker.value)"
    >
      Agregar Ruta
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rutas: [
        { id: 0, color: "green" },
        { id: 1, color: "red" },
        { id: 2, color: "blue" },
        { id: 3, color: "grey" }
      ]
    };
  },
  methods: {
    addRoute: function(colorInput) {
      this.rutas.push({ id: this.rutas.length + 1, color: colorInput });
    }
  }
};
</script>

<style lang="scss" scoped>
.boton {
  color: white;
  border-radius: 20px;
  width: 200px;
  height: 50px;
  margin: 10px;
  font-size: 25px;
  padding: 10px;
}

.link {
  display: inline-block;
}
</style>
