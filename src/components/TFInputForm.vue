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
        <b-form-select
          v-model="inputForm.size"
          value-field="hola" 
        >
          <b-form-select-option value="XS">
            XS
          </b-form-select-option>
          <b-form-select-option value="S">
            S
          </b-form-select-option>
          <b-form-select-option value="M">
            M
          </b-form-select-option>
          <b-form-select-option value="L">
            L
          </b-form-select-option>
          <b-form-select-option value="XL">
            XL
          </b-form-select-option>
          <b-form-select-option value="2XL">
            2XL
          </b-form-select-option>
          <b-form-select-option value="3XL">
            3XL
          </b-form-select-option>
        </b-form-select>
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
      inputForm: this.form,      
    }
  },
  computed: {
    
    },
};
</script>

<style lang="scss" scoped></style>
