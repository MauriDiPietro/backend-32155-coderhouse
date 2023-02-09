import express from 'express';
import apiRoutes from './routes/products.routes.js';

const app = express();

app.use(express.json());
app.use('/api', apiRoutes);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server ok, puerto: ${PORT}`);
});
