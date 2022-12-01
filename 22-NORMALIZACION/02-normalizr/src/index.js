import express from 'express';
import { original, normalizado } from './normalizado.js';

const app = express();

app.get('/original', original);
app.get('/normalizado', normalizado);

app.listen(8080, () => console.log('Server ok port: 8080'));
