import mongoose from 'mongoose';
import Config from '../config/index.js';  

export const initDb = () => {
    return mongoose.connect(Config.MONGO_ATLAS_URL);
}
