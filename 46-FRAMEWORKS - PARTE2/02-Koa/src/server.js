import Koa from 'koa';
import mainRouter from './routes/index.js';
import koaBody from 'koa-body';
import { initMongoDB } from './database/init.js';

const app = new Koa(); 

app.use(koaBody()); 

app.use(mainRouter);

const PORT = 8080;
const server = app.listen(PORT, async() => {
  await initMongoDB()
  console.log(`Servidor Koa escuchando en el puerto ${PORT}`);
});

server.on('error', (error) => console.log('Error en Servidor Koa:', error));

