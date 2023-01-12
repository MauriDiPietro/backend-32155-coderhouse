import express from 'express';
import mainRouter from './routes/index.js';
import Config from './config/index.js';
import minimist from 'minimist';
import cluster from 'cluster';
import os from 'os';
import { connectDb } from './db/db.js';

const app = express();

const argumentos = minimist(process.argv.slice(2));

const PORT = argumentos.puerto || Config.PORT || 8080;

const clusterMode = argumentos.cluster;
const numCPUs = os.cpus().length;


/* --------------------------------------------------------------------------- */

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

  app.use(express.json());

  app.use('/api', mainRouter);

  connectDb().then(() => {
    console.log('DB CONECTADA');
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  });
}
