<template>
  <div>
    <div class="container d-flex justify-content-center mt-4">
      <b-button
        variant="success"            
        @click="tFInputButtonEmit"
      >
        INGRESAR
      </b-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      tFInputButtonEmit() {
        this.$emit("tFInputButtonEmit")
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>