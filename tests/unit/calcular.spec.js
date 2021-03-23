import { shallowMount } from '@vue/test-utils'
import Calcular from '@/views/Calcular.vue'

describe('Componente Prueba.vue', () => {

it('verificar valores', () => {
/// Crea una instancia del componente
const wrapper = shallowMount(Calcular);
/// Evalúa que el valor por defecto sea "null"
expect(wrapper.vm.a).toBe(null);
expect(wrapper.vm.b).toBe(null);
expect(wrapper.vm.operator).toBe(null);
expect(wrapper.vm.resultado).toBe(null);
expect(wrapper.vm.igual).toBe(null);
});

//Asignar valores y verificar

  it('verificar asignar y verificar', () => {
    
  const wrapper = shallowMount(Calcular);  
  wrapper.setData({a : 1});
  expect(wrapper.vm.a).toBe(1);
  })

//testear Borrar valores y verificar

  it('verificar metodo borrar', async () => {

  const wrapper = shallowMount(Calcular);
  const button = wrapper.find('.boton-rojo')  
  wrapper.setData({a : 3}, {b : 1}, {operator: "+"}, {resultado: 3});
  expect(wrapper.vm.a).toBe(3);
  await button.trigger('click');
  expect(wrapper.vm.a).toBe(null)
  expect(wrapper.vm.b).toBe(null)
  expect(wrapper.vm.operator).toBe(null)
  expect(wrapper.vm.resultado).toBe(null)
  expect(wrapper.vm.igual).toBe(null)
  })

  it('verificar operación suma', async () => {

    const wrapper = shallowMount(Calcular);    
    const button = wrapper.find('button.boton-azul'); 
    const input = wrapper.find('select'); 
    wrapper.setData({a : 2});
    wrapper.setData({b : 1});
    await input.setValue('+');
    expect(wrapper.find('select').element.value).toBe('+')  
    await button.trigger('click');  
    expect(wrapper.vm.resultado).toBe(3);  
    })

  it('verificar operación resta', async () => {

    const wrapper = shallowMount(Calcular);    
    const button = wrapper.find('button.boton-azul'); 
    const input = wrapper.find('select'); 
    wrapper.setData({a : 2});
    wrapper.setData({b : 1});
    await input.setValue('-');
    expect(wrapper.find('select').element.value).toBe('-')
    expect(wrapper.vm.a).toBe(2);
    expect(wrapper.vm.b).toBe(1);
    await button.trigger('click');  
    expect(wrapper.vm.resultado).toBe(1);  
    })

  it('verificar operación division', async () => {

    const wrapper = shallowMount(Calcular);    
    const button = wrapper.find('button.boton-azul'); 
    const input = wrapper.find('select'); 
    wrapper.setData({a : 2});
    wrapper.setData({b : 1});
    await input.setValue('/');    
    await button.trigger('click');  
    expect(wrapper.vm.resultado).toBe(2);  
    })

  it('verificar operación multiplicacion', async () => {

    const wrapper = shallowMount(Calcular);    
    const button = wrapper.find('button.boton-azul'); 
    const input = wrapper.find('select'); 
    wrapper.setData({a : 2});
    wrapper.setData({b : 1});
    await input.setValue('*');    
    await button.trigger('click');  
    expect(wrapper.vm.resultado).toBe(2);  
    })
})


