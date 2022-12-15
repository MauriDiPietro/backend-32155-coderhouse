import express from 'express';
import mainRouter from './routes/index.js';
import { connectDb } from './services/db.js';
import Config from './config/index.js';

const app = express();

await connectDb();
console.log('Conectado a la base de datos!');

app.use(express.json());

app.use('/api', mainRouter);

app.listen(Config.PORT, () => console.log(`Escuchando en el puerto ${Config.PORT}`));

