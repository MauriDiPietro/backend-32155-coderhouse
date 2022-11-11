import express from 'express';
import morgan from 'morgan';
const PORT = 8080;

const app = express();

import cars from './routes/routes.cars.js';

app.use(morgan('dev'));
app.use(express.json());
app.use('/cars', cars);

app.listen(PORT, ()=>{
    console.log(`Server ok en puerto ${PORT}`);
})