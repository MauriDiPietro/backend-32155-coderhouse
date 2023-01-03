import cluster from 'cluster';
import os from 'os';
import express from 'express';

const numCPUs = os.cpus().length;

const app = express();

if(cluster.isPrimary) {
    console.log(`cantidad de nucleos= ${numCPUs}`);
    console.log(`PID MASTER= ${process.pid}`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker, code) => {
        console.log(`Worker ${worker.process.pid} with code ${code}`);
        cluster.fork();
    })
} else {

    app.get('/', (req, res) => {
        console.log(`PID= ${process.pid}`)
        res.json({
            pid: process.pid,
            msg: 'HOLA'
        });
    });
      
    app.get('/slow', function (req, res) {
        console.log(`PID= ${process.pid}`);
        let sum = 0;
        for (let i = 0; i < 15006500445; i++) {
          sum += i;
        }
      
        res.json({
          pid: process.pid,
          sum,
        });
    });
      
    app.get('/dead', (req, res) => {
        res.json({msg: 'OK'});
        process.exit(0);
    });
    
 

    const PORT = 8080;
    
    app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`));
}

