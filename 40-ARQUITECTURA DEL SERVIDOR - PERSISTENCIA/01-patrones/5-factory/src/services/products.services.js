import { save, getAll } from "../persistence/daos/factory.js";

export async function saveProduct(product){
    const prod = await save(product)
    return prod;
};

export async function getAllProducts() {
    const products = await getAll();
    return products;
};