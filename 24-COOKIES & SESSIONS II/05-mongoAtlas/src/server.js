import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mainRouter from './routes/user.routes.js';
import MongoStore from 'connect-mongo';
import config from './config/index.js';

const ttlSeconds = 180;

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: config.MONGO_ATLAS_URL,
    crypto: {
      secret: '1234',     
    },
  }),
  secret: 'secretString', 
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
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

