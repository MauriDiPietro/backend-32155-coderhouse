import express from 'express';
import exphbs from 'express-handlebars';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mainRouter from './routes/index.js';
import path from 'path'
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const publicPath = path.resolve(__dirname, '../../public');
app.use(express.static(publicPath));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'secretString',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    },
  })
);

const layoutDirPath = path.resolve(__dirname, '../../01-desafio/views/layouts');
const defaultLayerPth = path.resolve(__dirname, '../../01-desafio/views/layouts/main.hbs');
const partialDirPath = path.resolve(__dirname, '../../01-desafio/views/partials');

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    layoutsDir: layoutDirPath,
    extname: 'hbs',
    defaultLayout: defaultLayerPth,
    partialsDir: partialDirPath,
  })
);

app.use(mainRouter);


const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

server.on('error', (error) => console.log(`Error en servidor: ${error}`));

