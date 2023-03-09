import express, { Express, Request, Response } from "npm:express"
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

const app: Express = express();

app.use(express.json())

app.get('/', (req: Request, res: Response)=>{
    res.send('Hola Deno desde expresss!')
});

app.post('/', (req: Request, res: Response)=>{
    console.log(req.body);
});

app.listen(config().PORT);
console.log(`Server ok on port ${config().PORT}`);

//deno run --allow-net --allow-read --allow-env 10-server-express.ts