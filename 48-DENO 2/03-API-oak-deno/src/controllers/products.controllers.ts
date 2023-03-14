import productsModel, { Product } from '../models/products.model.ts';
import { Context } from '../config/deps.ts';

export const getAllProducts = async(ctx: Context): Promise<any> =>{
                                    //({request, response}: {request: any, response: any})
    try {
        const products: Product[] = await productsModel.find({});
        ctx.response.body = products;
    } catch (error) {
        console.log(error);
        ctx.response.body = error.message;
    }
}

export const createProducts = async(ctx: Context): Promise<any> => {
    try {
        const data = await ctx.request.body().value;
        const newProduct: Product = await productsModel.create(data);
        ctx.response.status = 200;
        ctx.response.body = newProduct;
    } catch (error) {
        ctx.response.body = error.message;
    }
}

export const updateProduct = async({request, response}: {request: any, response: any}): Promise<any>=>{
        const { id } = request.params;
        const data = await request.body().value;
        try {
            await productsModel.findByIdAndUpdate(id, data);
            response.body = data;
        } catch (error) {
            response.body = error.message;
        }
}

export const deleteProduct = async(ctx: any): Promise<any>=>{
        const { id } = ctx.params;
        try {
            const productToDelete: Product | null = await productsModel.findByIdAndDelete(id);
            ctx.response.body = productToDelete;
        } catch (error) {
            ctx.response.body = error.message;
        }
}

export const getProductById = async(ctx: any): Promise<any>=>{
    const { id } = ctx.params;
        try {
            const product: Product | null = await productsModel.findById(id);
            ctx.response.body = product;
        } catch (error) {
            ctx.response.body = error.message;
        }
}
