import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from '../../src/store/modules/pokeStore'
import _ from 'lodash'

test('check number in pokemon', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(_.cloneDeep(storeConfig))
  expect(store.state.number).toBe(1)
  
})

