const express = require('express');
const app = express();
const minimist = require('minimist');

const arguments = minimist(process.argv.slice(2));
const PORT = arguments.puerto;

console.log(arguments);

app.get('/', (req, res) => {
  console.log('Resolving / endpoint');
  res.json({
    pid: process.pid,
    msg: `HOLA desde puerto ${PORT}`,
  });
});

app.get('/api/randoms', (req, res) => {
  console.log('Resolving / endpoint');
  res.json({
    pid: process.pid,
    msg: `HOLA desde puerto ${PORT}`,
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

app.listen(PORT, () =>
  console.log(
    `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
  )
);
