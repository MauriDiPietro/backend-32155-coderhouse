import { save, getAll } from "../persistence/daos/daos.js";

export async function saveProduct(product){
    const prod = await save(product)
    return prod;
};

export async function getAllProducts() {
    const products = await getAll();
    return products;
};