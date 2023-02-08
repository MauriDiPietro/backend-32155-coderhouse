import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


export default class MongoDB {
    static instance;

    constructor(collection, schema){
        this.collection = mongoose.model(collection, schema);
        if(!MongoDB.instance){
            this.initDB = mongoose.connect(process.env.MONGOURL);
            MongoDB.instance = this;
            console.log('Conectado a MongoDB!');
        } else {
            return MongoDB.instance;
        }
    }

    async initMongoDB(){
        return this.initDB;
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