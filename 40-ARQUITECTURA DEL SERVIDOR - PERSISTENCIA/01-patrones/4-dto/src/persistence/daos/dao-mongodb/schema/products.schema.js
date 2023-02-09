import mongoose from "mongoose";

export const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true},
    codebar: { type: String, required: true},
    stock: { type: Number, required: true},
});