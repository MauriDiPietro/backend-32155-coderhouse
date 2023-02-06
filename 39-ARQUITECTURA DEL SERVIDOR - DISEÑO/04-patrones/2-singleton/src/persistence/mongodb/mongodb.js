import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const initMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log('Conectado a Mongo!');
    } catch (error) {
        console.log(error);
    }
};

export default class MongoDB {

    constructor(collection, schema){
        this.collection = mongoose.model(collection, schema);
    }

    async save(doc) {
        try {
            const document = await this.collection.create(doc);
            return document;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const docs = await this.collection.find({});
            return docs;
        } catch (error) {
            console.log(error);
        }
    }
}