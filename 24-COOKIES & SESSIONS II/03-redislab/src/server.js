import config from './config/index.js';
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mainRouter from './routes/user.routes.js';
import connectRedis from 'connect-redis';
import redis from 'redis';

const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
  host: config.REDIS_URL,
  port: config.REDIS_PORT,
  password: config.REDIS_PSW,
});

const StoreOptions = {
  store: new RedisStore({ client: redisClient }),
  secret: config.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10000,
  }
};
//Lista completa de opciones en https://www.npmjs.com/package/session-file-store#options 

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(session(StoreOptions));
app.use('/api', mainRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});

export default app;
