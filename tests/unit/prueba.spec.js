import { mount } from '@vue/test-utils'
import Prueba from '@/components/Prueba.vue'

describe('Componente Prueba.vue', () => {
  const wrapper = mount(Prueba);
  it('Comprobamos si el test funciona', () => {
    expect(true).toBeTruthy();
  });
  it('El componente está', () => {
    expect(wrapper.vm.$refs.h1).not.toBeUndefined();
  });
});