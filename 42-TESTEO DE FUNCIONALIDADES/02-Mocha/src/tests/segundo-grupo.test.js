import { Tareas } from '../utils/tareas.js';
import { strict as assert } from 'assert';
import fs from 'fs';
import path from 'path/posix';

console.log(process.cwd());

describe('comprobando que saveToFile() funcione bien', () => {
  const todosFilePath = path.resolve(process.cwd() + '/tareas.txt');
  let todos;

  before(() => {
    console.log('\n********* se ejecuta antes de todos los tests *********');
  });

  after(function () {
    console.log('\n********* se ejecuta al finalizar todos los tests *********');
  });

  beforeEach(() => {
    console.log('\n********* antes de un Test en particular *********');
    todos = new Tareas();
  });

  afterEach(() => {
    console.log('\n********* al finalizar un test en particular *********');
    fs.unlinkSync(todosFilePath);
  });

  it('debería guardar una tarea en el archivo tareas.txt (then/catch)', () => {
    const tareas = [
      'tarea 1',
      'tarea 2',
    ];

    todos.add(tareas[0]);
    todos.add(tareas[1]);
    const contenidoEsperado = tareas.map((t) => ({
      title: t,
      complete: false,
    }));

    return todos.saveToFile().then(() => {
      assert.strictEqual(fs.existsSync(todosFilePath), true);

      let content = JSON.parse(fs.readFileSync(todosFilePath, 'utf-8'));
      assert.deepEqual(content, contenidoEsperado);
    });
  });

  it('debería guardar una tarea en el archivo todos.txt (async/await)', async () => {
    const tareas = [
      'tarea 1',
      'tarea 2',
    ];

    todos.add(tareas[0]);
    todos.add(tareas[1]);
    const contenidoEsperado = tareas.map((t) => ({
      title: t,
      complete: false,
    }));

    await todos.saveToFile();

    assert.strictEqual(fs.existsSync(todosFilePath), true);
    let content = JSON.parse(fs.readFileSync(todosFilePath, 'utf-8'));
    assert.deepEqual(content, contenidoEsperado);
  });
});