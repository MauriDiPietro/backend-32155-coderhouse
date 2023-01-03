import express from 'express';
import minimist from 'minimist';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  console.log('Resolving / endpoint');
  res.json({
    pid: process.pid,
    msg: 'HOLA!!',
  });
});

app.get('/slow', function (req, res) {
  console.log(`PID => ${process.pid} will work slow`);
  let sum = 0;
  for (let i = 0; i < 6e9; i++) {
    sum += i;
  }

  res.json({
    pid: process.pid,
    sum,
  });
});

app.get('/dead', (req, res) => {
  res.json({ msg: 'OK' });
  console.log(`PID => ${process.pid} will die`);
  process.exit(0);
});


const argumentos = minimist(process.argv.slice(2));
const PORT = argumentos.puerto || 8080;

console.log(argumentos);
app.listen(PORT, () =>
  console.log(
    `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
  )
);