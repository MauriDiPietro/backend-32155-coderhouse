import { type Request, type Response } from 'npm:express';
import productsModel, { Product } from '../models/products.model.ts';

export const getAllProducts = async(_req: Request, res: Response): Promise<Response>=>{
    try {
        const products: Product[] = await productsModel.find({});
        res.json(products)
    } catch (error) {
        console.log(error);
        
    }
}

export const createProducts = async(req: Request, res: Response): Promise<Response> => {
    try {
      const { body } = req;
      const newProduct: Product = await productsModel.create(body);
      res.status(200).json(newProduct);
    } catch (error) {
      res.status(404).send(error.message);
    }
}

export const updateProduct = async(req: Request, res: Response): Promise<Response>=>{
    const { id } = req.params;
    const { body } = req;
        try {
            await productsModel.findByIdAndUpdate(id, body);   
            res.status(200).json(body);
        } catch (error) {
            res.status(404).send(error.message);
        }
}

export const deleteProduct = async(req: Request, res: Response): Promise<Response>=>{
    const { id } = req.params;
        try {
            const productToDelete: Product | null = await productsModel.findByIdAndDelete(id);   
            res.status(200).json(productToDelete);
        } catch (error) {
            res.status(404).send(error.message);
        }
}

export const getProductById = async(req: Request, res: Response): Promise<Response>=>{
    const { id } = req.params;
        try {
            const product: Product | null = await productsModel.findById(id);   
            res.status(200).json(product);
        } catch (error) {
            res.status(404).send(error.message);
        }
}