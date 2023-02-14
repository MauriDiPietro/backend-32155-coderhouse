import express from "express";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = { origin: 'http://localhost:5000' }

const whiteList = ['http://localhost:3000', 'http://localhost:5000']

// app.use(cors()); 

// app.use(cors(whiteList));    //aplica a todas las rutas

app.get("/", (req, res) => {
  res.status(200).send("Hola CORS");
});

//aplcia a la ruta en particular

app.get("/cors2", cors(corsOptions), (req, res) => {
  res.status(200).send("Hola CORS");
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
