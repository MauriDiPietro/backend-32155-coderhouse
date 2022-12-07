import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import connectRedis from 'connect-redis';
import redis from 'redis';
import mainRouter from './routes/index.js';

const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
  host: 'localhost',  //o 127.0.0.1
  port: 6379,
  password: 'R3d1sC$ch3',
});

const ttlSeconds = 180;

const StoreOptions = {
  store: new RedisStore({ 
    client: redisClient,                     
    prefix: 'session:',                   
    ttl: ttlSeconds      
  }),
  secret: 'secretString',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  }
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

