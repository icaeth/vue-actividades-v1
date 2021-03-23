import { shallowMount, createLocalVue } from '@vue/test-utils'
import Mutaciones from '@/views/Mutaciones.vue'
import Vuex from 'vuex'


//Creamos un Vue local y usamos Vuex en él
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Mutaciones.vue', ()=> {
  let mockStore
  let store

  beforeEach(() => {

    mockStore ={
      score: 0,
      msg: false,
      students: [{nombre: "pepe", apellido: "globos"}]
    }
    
    //Invocamos una mock store
    store = new Vuex.Store({
      mockStore
    })
  })


it('valores de data vacios', () => {
/// Crea una instancia del componente, con la store y localVue
const wrapper = shallowMount(Mutaciones, {store, localVue});
/// Evalúa que el valor de nombre esté vacio
expect(wrapper.vm.nombre).toBe("");
/// Evalúa que el valor de apellido esté vacio
expect(wrapper.vm.apellido).toBe("");

})


it('valores de store asignados', () => {
/// Crea una instancia del componente, con la store y localVue
const wrapper = shallowMount(Mutaciones, {store, localVue});
//Define si ekl valor de la mockstore está definido
expect(mockStore.score).toBe(0);
})

})