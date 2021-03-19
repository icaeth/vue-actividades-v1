<template>
  <div>
    <div class="input container">
      <b-input-group
        
        prepend="NOMBRE"
        class="mt-3"
      >
        <b-form-input
          v-model="inputForm.name"
          type="text"          
        />
      </b-input-group>

      <b-input-group 
        
        prepend="COLOR"
      >
        <b-form-input v-model="inputForm.color" />
      </b-input-group>

      <b-input-group
        
        prepend="TAMAÑO"
      >
        <b-form-input v-model="inputForm.size" />
      </b-input-group>

      <b-input-group
        
        prepend="MATERIAL"
      >
        <b-form-input v-model="inputForm.material" />
      </b-input-group>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: function () {
        return { message: 'form' } 
    },
  },
  },  
  data() {
    return {     
      inputForm: this.form
    }
  },
  methods: {
      
    },
};
</script>

<style lang="scss" scoped></style>
