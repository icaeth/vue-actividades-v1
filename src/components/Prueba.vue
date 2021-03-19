<template>
  <div>
    <h1 ref="h1">
      Visor de Datos
    </h1>
    <p>Dato: {{ data }}</p>
    <p>Resultado: {{ sumar }} {{ restar }} {{ multiplicar }} {{ dividir }}</p>
  </div>
</template>

<script>
  export default {

data() {
  return {
    data: 2,
    elFalso: false
  }
},    

computed: {
  sumar() {
    return this.data + 1
  },
  restar() {
    return this.data - 1
  },
  dividir() {
    return this.data / 2
  },
  multiplicar() {
    return this.data * 2
  }
},

  }
</script>

<style lang="scss" scoped>

</style>