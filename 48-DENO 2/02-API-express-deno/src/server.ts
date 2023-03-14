import express, {type Express} from 'npm:express';
import { config } from './config/deps.ts';
import routerProducts from './routes/products.routes.ts';
import './db/db.ts';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/products', routerProducts);

app.listen(config().PORT, ()=>{
    console.log(`SERVER OK, PORT= ${config().PORT}`);
});