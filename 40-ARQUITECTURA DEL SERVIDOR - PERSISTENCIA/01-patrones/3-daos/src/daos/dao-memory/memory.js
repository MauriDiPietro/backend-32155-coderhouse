export default class DaoMemory {
    constructor(){
        this.products = [];
    }

    async save(obj) {
        this.products.push(obj);
        return obj;
    }

    async getAll(){
        return this.products;
    }
};