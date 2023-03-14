//https://deno.land/manual@v1.30.3/node/how_to_with_npm/mongoose

import mongoose from 'npm:mongoose';
import { config } from "../config/deps.ts";

try {
    await mongoose.connect(config().MONGO_URL);
    console.log('Conectado a Mongo: ', mongoose.connection.name);
} catch (error) {
    console.log(error);
    
}