import mongoose from "mongoose";

export const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true}
});

export const ProductsModel = mongoose.model('product', productsSchema);