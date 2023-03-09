// Deno.env.set('PORT', '8080')
// const PORT = Deno.env.get('PORT')
// console.log(PORT);

//deno run --allow-env 07-env.ts 

import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

console.log(config().MYVARIABLEPRIVATE);

//deno run --allow-env --allow-read 07-env.ts 