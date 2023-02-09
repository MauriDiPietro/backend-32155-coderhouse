import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import ProductsDTO, { asDto } from '../../dto/products.dto.js';

mongoose.set('strictQuery', false);

export default class DaoMongoDB {
    constructor(collection, schema){
        this.collection = mongoose.model(collection, schema);
        this.initDB = mongoose.connect(process.env.MONGOURL, () => console.log("Connected to MongoDB"));
    }

    async initMongoDB() {
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
            return asDto(docs);
            // return new ProductsDTO(docs)
        } catch (error) {
            console.log(error);
        }
    }
}