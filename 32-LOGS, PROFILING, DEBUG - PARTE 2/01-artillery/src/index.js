import express from 'express';
import minimist from 'minimist';
import cluster from 'cluster';
import os from 'os';
import { isPrime } from './utils/index.js';

const app = express();

const argumentos = minimist(process.argv.slice(2));
const PORT = argumentos.puerto || 8080;

const clusterMode = argumentos.cluster;
const numCPUs = os.cpus().length;


if (clusterMode && cluster.isPrimary) {
  console.log('Ejecutando modo cluster');
  console.log(`PID MASTER ${process.pid}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died at ${Date()}`);
    cluster.fork();
  });
} else {

  app.get('/', (req, res) => {
    console.log('Resolving / endpoint');
    res.json({
      pid: process.pid,
      msg: `HOLA desde puerto ${PORT}`,
    });
  });
  

  app.get('/prime', (req, res) => {
    const primes = [];
    const max = Number(req.query.max) || 1000;
    for (let i = 1; i <= max; i++) {
      if (isPrime(i)) primes.push(i);
      // una vez que hace la verificacion los guarda en un array
    }
    res.json(primes);
  });

  app.listen(PORT, () =>
    console.log(
      `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
    )
  );
}
