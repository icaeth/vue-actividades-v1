<template>
  <div>
    <h1>Historias</h1>
    <h2>Las Historias de Alex</h2>
    <p>{{ historias[0].historia }}</p>
    <p>{{ historias[1].historia }}</p>
    <h2>Las Historias de Juan</h2>
    <p>{{ historias[2].historia }}</p>
    <p>{{ historias[3].historia }}</p>
    <br>
    <label for="input"><strong>¿Qué estás buscando?</strong></label>
    <input
      id="input"
      v-model="search"
      type="text"
      style="display: block"
    >
    <br>
    <h2>Resultados de la búsqueda:</h2>
    <p
      v-for="historia in filterHistories"
      :key="historia.id"
    >
      {{ historia.historia }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      historias: [
        { id: 1, historia: `Alex dice "¡Choqué mi Auto hoy!"` },
        { id: 2, historia: `Alex dice "Alguien se comió mi chocolate..."` },
        { id: 3, historia: `Juan dice "¡Ayer alguien robó mi bolso!"` },
        { id: 4, historia: `Juan dice "¡Me comí el chocolate de alguien!"` }
      ],
      search: ""
    };
  },
  computed: {
    filterHistories() {
      return this.historias.filter(historia => {
        return historia.historia.toLowerCase().match(this.search);
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
