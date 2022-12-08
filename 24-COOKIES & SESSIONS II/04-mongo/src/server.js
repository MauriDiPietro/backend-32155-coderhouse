import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mainRouter from './routes/index.js';
import MongoStore from 'connect-mongo';


const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost/coderhouse',
    ttl: 180000, //14 dias
    autoRemove: 'native', //'interval'
    // autoRemoveInterval: 1000
    // crypto: {
    //   secret: '1234',    
    // },
  }),
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 180000,
  },
};

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(session(StoreOptions));

app.use('/api', mainRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});

