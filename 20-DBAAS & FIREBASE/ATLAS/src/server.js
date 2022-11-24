import 'dotenv/config';
// require('dotenv').config()
import {initMongoDB} from './db/database.js';
import express from 'express';
import mainRouter from './routes/index.js';

const app = express();

app.use(express.json());

app.use('/api', mainRouter);

const init = async () => {
  await initMongoDB();
  const puerto = 8080;

  app.listen(puerto, () => console.log(`SERVER UP ON PORT ${puerto}`));
}

init();