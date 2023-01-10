import express from 'express';
import data from '../data.js';
import compression from 'compression';

const app = express();

app.use(compression());

app.get('/gzip', (req, res) => {
  res.send(data);
});

export default app;
