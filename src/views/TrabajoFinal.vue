<template>
  <div>
    <div class="hero container">
      <h1>Bienvenidos a la tienda de Pet Rock</h1>
    </div>
    <TFInputForm ref="inputForm" />
    <TFInputButton @tFInputButtonEmit="tFInputButtonEmit" />
    

    <b-container class="mt-5 pt-5">
      <b-table
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filterRegExp"
        :filter-included-fields="filterOn"        
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        stacked="md"
        show-empty
        small
        @filtered="onFiltered"
      >
        <template #cell(name)="row">
          {{ row.value }}
        </template>

        <template #cell(actions)="row">
          <b-button
            size="sm"
            class="mr-1"
            variant="warning"
            @click="info(row.item, row.index, $event.target)"
          >
            Actualizar
          </b-button>
          <b-button
            size="sm"
            variant="danger"
            @click="DEL_ITEMS(row.item.id)"
          >
            Borrar
          </b-button>
        </template>

        <template #row-details="row">
          <b-card>
            <ul>
              <li
                v-for="(value, key) in row.item"
                :key="key"
              >
                {{ key }}: {{ value }}
              </li>
            </ul>
          </b-card>
        </template>
      </b-table>

      <b-pagination
        ref="pagination"
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        align="fill"
        size="md"
        class="my-0"
      />

      <!-- Info modal -->
      <b-modal
        :id="infoModal.id"
        :title="infoModal.title"
        :content="infoModal.content"
        
        ok-only
        @hide="updateData"
      >
        <TFInputForm
          ref="inputFormModal"
          :form="infoModal.content"
        />
      </b-modal>
    </b-container>

    <div class="container mt-5">
      <h4>Filtra por tamaño</h4>      
      <b-form-select
        v-model="selected"
        :options="options"
        size="md"
        class="mt-3"
      />
      <div class="mt-3">
        Selected: <strong>{{ selected }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import TFInputButton from "../components/TFInputButton.vue";
import TFInputForm from "../components/TFInputForm.vue";
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  components: { TFInputForm, TFInputButton },
  data() {
    return {
      selected: null,
        options: [
          { value: null, text: 'Sin filtro activo' },
          { value: 'XS', text: 'El tamaño más pequeño' },
          { value: 'S', text: 'Pequeño, pero no tanto' },
          { value: 'M', text: 'Tamaño Mediano' },
          { value: 'L', text: 'Tamaño Grande' },
          { value: 'XL', text: 'El Magnum' },
          { value: '2XL', text: 'Un Onyx de Altura' },
          { value: '3XL', text: 'El mísmisimo Everest' }
        ],                        
      inputForm: [],      
      fields: [
        {
          key: "id",
          label: "ID",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "name",
          label: "Name of Rock",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "color",
          label: "Color",
          sortable: true,
          class: "text-center",
        },
        {
          key: "size",
          label: "Size",          
          sortable: true,          
        },
        {
          key: "material",
          label: "Material",          
          sortable: true,          
        },
        { key: "actions", label: "Actions" },
      ],
      totalRows: 30,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: ['size'],
      infoModal: {
        id: "Edit-ME",
        title: "",
        content: "",
      },
    };
  },
  computed: {
    ...mapState('tfinalStore',['items', 'entries', 'rowsNumber']),
  
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
    filterRegExp(){
      if(this.selected == null){
        let filterRegExp = this.selected
        return filterRegExp
      }else{
        let filterRegExp = new RegExp(`^(${this.selected})$`)
        return filterRegExp
      }      
    }
  }, 
  methods: {
    ...mapMutations('tfinalStore',['DEL_ITEMS', 'ADD_ITEMS','UPDATE_ITEMS']),
    info(item, index, button) {
      this.infoModal.title = `Editar Modal`;
      this.infoModal.content = item 
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    updateData() {
      this.UPDATE_ITEMS(this.$refs.inputFormModal.inputForm);      
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    tFInputButtonEmit(){           
      this.ADD_ITEMS(this.$refs.inputForm.inputForm);
      this.$refs.inputForm.inputForm = {}
      this.totalRows = this.items.length
    }    
  },  
};
</script>

<style lang="scss" scoped></style>
