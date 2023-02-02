import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import emailRouter from './routes/email.routes.js';

const app = express();

app.use(express.json());

app.use('/api', emailRouter);

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server ok en puerto ${PORT}`);
});