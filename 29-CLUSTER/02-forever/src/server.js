import express from 'express';
const app = express();
import minimist from 'minimist';

const optionalArgsObject = {
  alias: {
    p: 'puerto',
  },
  default: {
    puerto: '8080',
  },
};

const args = minimist(process.argv, optionalArgsObject);

const PORT = args.puerto;

app.get('/', (req, res) => {
  res.json({
    pid: process.pid,
    msg: 'HOLA',
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