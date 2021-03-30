import { mount } from '@vue/test-utils'
import BuscaMinas from '@/views/BuscaMinas.vue'

describe('Valores de Tablero', () => {
  const wrapper = mount(BuscaMinas);
  it('Comprobamos si el test funciona', () => {
    expect(true).toBeTruthy();
  });
  it('Valor de campo mínimo es 5', () => {
    expect(wrapper.vm.$data.fieldSizeMin).toBe(5);
  });
  it('Valor de campo máximo es 50', () => {
    expect(wrapper.vm.$data.fieldSizeMax).toBe(50);
  });
});

describe('El jugador escogerá el largo y ancho del tablero', () => {
  const wrapper = mount(BuscaMinas);
  const grid = wrapper.find('#minefield');
  const numberInput = wrapper.find('.number-input');
  const buttonStart = wrapper.find('.start');
  it('Valor de campo por defecto es 10', () => {
    expect(wrapper.vm.$data.fieldSize).toBe(10);
  });
  it('El tamaño en filas del campo corresponde al valor por defecto 10', () => {
    expect(grid.findAll('.row').length).toBe(10);
  });
  it('Modificar el número de campo cambia el valor de fieldSize', () => {
    numberInput.setValue(15);
    expect(wrapper.vm.$data.fieldSize).toBe(15);
  });
  it('Modificar el valor de fieldSize y clickear iniciar cambia el valor de la grilla', async () => {
    numberInput.setValue(20);
    await buttonStart.trigger('submit');    
    expect(grid.findAll('.row').length).toBe(20);
  });
});

describe('Existirá el 20% de minas de la cantidad de posiciones del juego.', () => {
  const wrapper = mount(BuscaMinas);  
  const numberInput = wrapper.find('.number-input');
  const buttonStart = wrapper.find('.start');

  it('Monto de bombas inicializa en 20 / tablero 10x10 por defecto', () => {
    expect(wrapper.vm.$data.amountOfBombs).toBe(20);
  });
  it('Modificar el valor de fieldSize a 20, clickear iniciar cambia el valor de la grilla y checar numero de bombas, deberian ser 80', async () => {
    numberInput.setValue(20);
    await buttonStart.trigger('submit');    
    expect(wrapper.vm.$data.amountOfBombs).toBe(80);
  });
});

describe('Las posiciones que no sean minas, pintarán un número según las minas a su alrededor',  () => {
  const wrapper = mount(BuscaMinas);
  const grid = wrapper.find('#minefield');
  const cell = grid.find('.row').find('.cell');
  const expected = ["", "1", "2", "3", "4", "5", "6", "7", "8"];  

  it('Al clickear una celda, despliega en blanco o un número alrededor', async () => {
    await cell.trigger('click');
    expect(expected).toContain(cell.find('.content').text())
  }); 
});

describe('Condición GameOver',  () => {
  const wrapper = mount(BuscaMinas);
  const grid = wrapper.find('#minefield');
  const cell = grid.find('.row').find('.cell');
  
  beforeEach(() => {    
    
    grid.find('.row').findAll('.cell').at(1).find('.content').trigger('click');
    wrapper.setData({minefield: [[{isBomb: true, isMarked: false, isRevealed: false, proximityCount: 1, x:0, y:0}]]});
    });
 
    it('Al clickear una celda con bomba, verificar gameOver', async () => {      
      await grid.find('.row').findAll('.cell').at(0).find('.content').trigger('click');      
      expect(wrapper.vm.$data.gameOver).toBe(true);         
    });
});

describe('Revelar Blancos',  () => {
  const wrapper = mount(BuscaMinas);
  const grid = wrapper.find('#minefield');  
  
  beforeEach(() => { 
    grid.find('.row').findAll('.cell').at(8).find('.content').trigger('click');
    //Simulamos un spread de blancos y números
    wrapper.setData({minefield: [[{isBomb: false, isMarked: false, isRevealed: true, proximityCount: 0, x:0, y:0}, {isBomb: false, isMarked: false, isRevealed: true, proximityCount: 0, x:0, y:1}, {isBomb: false, isMarked: false, isRevealed: true, proximityCount: 1, x:0, y:2}, {isBomb: false, isMarked: false, isRevealed: true, proximityCount: 1, x:0, y:3}, {isBomb: false, isMarked: false, isRevealed: true, proximityCount: 1, x:0, y:4}, {isBomb: false, isMarked: false, isRevealed: true, proximityCount: 2, x:0, y:5}]]});
    
  });

    it('Al clickear una celda con blanco x0 y0, verificar spread a x0y1 y x0y2 ', () => {      
      expect(grid.find('.row').findAll('.cell').at(0).find('.content').text()).toBe("");         
      expect(grid.find('.row').findAll('.cell').at(1).find('.content').text()).toBe("");         
      expect(grid.find('.row').findAll('.cell').at(2).find('.content').text()).toBe("1");         
      expect(grid.find('.row').findAll('.cell').at(3).find('.content').text()).toBe("1");         
      expect(grid.find('.row').findAll('.cell').at(4).find('.content').text()).toBe("1");         
      expect(grid.find('.row').findAll('.cell').at(5).find('.content').text()).toBe("2"); 
  });
});



