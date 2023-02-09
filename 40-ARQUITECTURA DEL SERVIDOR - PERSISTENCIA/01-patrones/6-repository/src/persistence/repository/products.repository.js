import { asDto } from "../dto/products.dto.js";
import { getDao } from "../daos/factory.js";

export default class ProductsRepository {
    constructor() {
        this.dao = getDao();
    }

    async save (prod) {
        const product = await this.dao.save(prod);
        return product;
    }

    async getAll() {
        const products = await this.dao.getAll();
        const prodsDTO = asDto(products);
        return prodsDTO;
    }

}

//PERSISTENCIA --> SELECCIONAMOS EL DAO (FACTORY) --> REPOSITORY (DAO-DTO) ---> SERVICIO --> CONTROLLER