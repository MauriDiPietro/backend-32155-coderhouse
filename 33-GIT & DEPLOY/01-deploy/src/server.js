import express from 'express';
const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Bienvenido a mi servidor!</h1>')
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server ok en puerto ${PORT}`)
});