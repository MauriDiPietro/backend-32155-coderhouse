//https://deno.land/x/oak@v11.1.0

import { Application, config } from "./config/deps.ts";
import router from "./routes/products.routes.ts";
import './db/db.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = config().PORT;
console.log('Server OAK run!');
await app.listen({port: Number(PORT)});
