import { getMax, getMin, promedio } from './utils.js';

process.on('exit', (code) => {
  console.log(`Program exit with code ${code}`);
});

const argumentos = process.argv.slice(2);


if (!argumentos.length) {
  const error = {
    descripcion: 'entrada vacia',
  };
  console.log(error);
  process.exit(-4);
}


const numeros = argumentos
  .map((num) => Number(num))
  .filter((anArg) => !isNaN(anArg));
  console.log('argumentos despues de pasados a Number', numeros);

if (numeros.length !== argumentos.length) { 
  const error = {
    descripcion: 'error de tipo',
    entrada: argumentos,
    isNan: argumentos.map((anArg) => isNaN(Number(anArg))), 
  };
  console.log(error);
  process.exit(-5);
}


const datos = {
  numeros: argumentos,
  prom: promedio(numeros),
  maximo: getMax(numeros),
  minimo: getMin(numeros),
  ejecutable: process.execPath,
  pid: process.pid,
};

console.log(datos);
process.exit(0);

