import { Schema, model } from 'npm:mongoose';

export interface Product {
    name: string;
    price: number;
}

const productSchema = new Schema<Product>({
    name: String,
    price: Number,
}, {
    timestamps: true,
});

export default model<Product>('Product', productSchema)
