<template>
  <div>
    <div class="hero container">
      <h1>Bienvenidos a la tienda de Pet Rock</h1>
    </div>

    <div class="input container">
      <b-input-group
        prepend="NOMBRE"        
        class="mt-3"
      >
        <b-form-input
          type="text"          
        />
      </b-input-group>

      <b-input-group
        prepend="COLOR"        
      >
        <b-form-input />
      </b-input-group>

      <b-input-group
        prepend="TAMAÑO"        
      >
        <b-form-input />
      </b-input-group>

      <b-input-group
        prepend="PESO"        
      >
        <b-form-input />
      </b-input-group>
    </div>

    <div class="container d-flex justify-content-center mt-4">
      <b-button             
        variant="success"
      >
        INGRESAR
      </b-button>
    </div>

    <div class="container productos mt-5 pt-5">
      <div class="overflow-auto">
        <b-table
          id="my-table"
          :items="items"
          :per-page="perPage"
          :current-page="currentPage"
          small
        />
      </div>
      <p class="mt-3">
        Current Page: {{ currentPage }}
      </p>
      <b-pagination
        v-model="currentPage"
        class="mt-3"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      />
    </div>
  </div>
</template>

<script>
        export default {
        data() {
        return {
        perPage: 10,
        currentPage: 1,
        items: [
        { id: 1, name: 'Fred', color: 'Flintstone',tamaño: 'Flintstone',peso: 'Flintstone' },
        { id: 2, name: 'Wilma', color: 'Flintstone' },
        { id: 3, name: 'Barney', color: 'Rubble' },
        { id: 4, name: 'Betty', color: 'Rubble' },
        { id: 5, name: 'Pebbles', color: 'Flintstone' },
        { id: 6, name: 'Bamm Bamm', color: 'Rubble' },
        { id: 7, name: 'The Great', color: 'Gazzoo' },
        { id: 8, name: 'Rockhead', color: 'Slate' },
        { id: 9, name: 'Pearl', color: 'Slaghoople' }
        ]
        }
        },
        computed: {
        rows() {
        return this.items.length
        }
        }
        }
      </script>

<style lang="scss" scoped>



</style>