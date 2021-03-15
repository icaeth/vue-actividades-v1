<template>
  <div>
    <div class="gentle-flex">
      <div class="contenedor">
        <div class="columna1">
          <h1><strong>Lista Estudiantes VUE.JS</strong></h1>
          <div class="container_dos">
            <span> <strong> Nombre </strong></span><span><strong>Apellidos</strong></span>
          </div>
          <div
            v-for="(student, index) in studentsStore"
            :key="index"
            class="container_dos"
          >
            <span> {{ student.nombre }} </span><span>{{ student.apellido }}</span>
          </div>
        </div>
        <div class="columna2">
          <label
            for="nombre"
            style="display: block"
          >Nombre</label>
          <input
            id="nombre"
            v-model="nombre"
            type="text"
            style="display: block"
          >
          <label
            for="apellidos"
            style="display: block"
          >Apellidos</label>
          <input
            id="apellidos"
            v-model="apellido"
            type="text"
            style="display: block"
          >
          <button @click="agregar(nombre, apellido)">
            Agregar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      apellido: ""
    };
  },
  computed: {
    studentsStore() {
      return this.$store.state.students;
    }
  },
  methods: {
    agregar(uno, dos) {
      let cheque = { nombre: uno, apellido: dos };
      this.$store.commit("ADD_STUDENT", cheque);
    }
  }
};
</script>

<style lang="scss" scoped>
.gentle-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1ch;
}
.contenedor {
  display: flex;
  border: 5px solid black;
}
.container_dos {
  display: flex;
  justify-content: space-evenly;
}
.columna1 {
  width: 600px;
}
.columna2 {
  width: 600px;
}
</style>
