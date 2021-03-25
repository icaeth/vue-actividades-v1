<template>
  <div>
    <b-container>
      <b-jumbotron
        header="BootstrapVue"
        lead="Bootstrap v4 Componentes para Vue.js 2"
      >
        <p>Más información para visitar el sitio</p>
        <b-btn
          variant="primary"
          href="https://bootstrap-vue.org/"
        >
          Más información
        </b-btn>
      </b-jumbotron>
      <b-form-group
        horizontal
        :label-cols="4"
        description="Ingrese su nombre."
        label="Ingrese su nombre"
      >
        <b-form-input v-model.trim="name" />
      </b-form-group>
      <b-alert
        variant="success"
        :show="showAlert"
      >
        Hola {{ name }}
      </b-alert>
    </b-container>
  </div>
</template>

<script>
  export default {
data() {
  return {
    name: ""
  }
},
computed: {
showAlert() {
return this.name.length > 4 ? true : false
}
}


  }
</script>

<style lang="scss" scoped>

</style>