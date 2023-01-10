import express from 'express';
import log4js from 'log4js';

const app = express();

log4js.configure({
  appenders: {
    fileAppender: { type: 'file', filename: './logs/example-2.log' },
    console: { type: 'console' },
  },
  categories: {
    default: { appenders: ['fileAppender', 'console'], level: 'trace' },
    myLogger: { appenders: ['console'], level: 'warn' },
  },
});

const logger = log4js.getLogger();

app.get('/', (req, res) => {
  logger.warn(`PID => ${process.pid}`);
  
  res.json({
    pid: process.pid,
    msg: 'HOLA',
  });
});
  
app.get('/slow', function (req, res) {
  logger.warn(`PID => ${process.pid} will work slow`);
  let sum = 0;
  for (let i = 0; i < 15006500445; i++) {
    sum += i;
  }
  
  res.json({
    pid: process.pid,
    sum,
  });
});
  
app.get('/home', (req) => {
  try{
    res.json({ msg: 'Bienvenido!' });
  } catch(error) {
    logger.fatal(error);
  }
});

const PORT = 8080;

app.listen(PORT, () =>
  logger.info(
    `Servidor express escuchando en el puerto ${PORT}`
  )
);


