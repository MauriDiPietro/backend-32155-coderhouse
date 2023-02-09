import { saveProduct, getAllProducts } from "../services/products.services.js";

export const saveController = async (req, res) => {
    const { body } = req;
    try {
        const product = await saveProduct(body);
        res.json(product);
    } catch (error) {
        console.log(error);
    }
}

export const getAllController = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        console.log(error);
    }
}
