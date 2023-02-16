import { Tareas } from '../utils/tareas.js';
import Chai from 'chai';

const { expect, assert } = Chai;
const should = Chai.should();


describe('test de integración de tareas', function () {

  it('debería crear el contenedor de tareas vacío', function () {
    //preparacion
    const tareas = new Tareas();  
    
    //ejecucion
    const listadoTareas = tareas.list();  

    //afirmaciones
    expect(listadoTareas).to.have.lengthOf(0);      //expect
    assert.lengthOf(listadoTareas, 0);              //assert
    tareas.list().should.have.lengthOf(0);         //should
    assert.strictEqual(tareas.list().length, 0);
  });

  it('debería adicionar tareas correctamente', function () {

    const tareas = new Tareas();

    tareas.add('run code');

    assert.strictEqual(tareas.list().length, 1);

    assert.deepStrictEqual(tareas.list(), [
      { complete: false, title: 'run code' },
    ]);

    tareas.add('otra tarea');

    assert.strictEqual(tareas.list().length, 2);
    assert.deepStrictEqual(tareas.list(), [
      { title: 'run code', complete: false },
      { title: 'otra tarea', complete: false },
    ]);
  });

  it('debería marcar una tarea como completa', function () {
    const tareas = new Tareas();

    tareas.add('run code');
    tareas.add('otra tarea');

    tareas.complete('run code');
    assert.deepStrictEqual(tareas.list(), [
      { title: 'run code', complete: true },
      { title: 'otra tarea', complete: false },
    ]);
  });
});

describe('comprobar error en completar tarea inexistente', function () {
  it('deberia dar error cuando no hay tareas cargadas', function () {
    const tareas = new Tareas();
    const errorEsperado = 'No hay tareas';

    const funcionDisparadora = () => {
      tareas.complete('Una Tarea mas');
    };

    assert.throws(funcionDisparadora, Error, errorEsperado);
    expect(funcionDisparadora).to.throw(Error, errorEsperado);
  });

  it('deberia dar error cuando la tarea a completar no existe', function () {
    const tareas = new Tareas();
    tareas.add('run code');

    const errorEsperado = 'Tarea no encontrada';

    const funcionDisparadora = () => {
      tareas.complete('una tareas más');
    }

    assert.throws(funcionDisparadora, Error, errorEsperado);
    expect(funcionDisparadora).to.throw(Error, errorEsperado);
  });
});
