// DAO ---> data(.....) ---> DTO (data(..)) ---> SERVICIO ---> CONTROLLER ---> ROUTERS

export default class ProductsDTO {
    constructor({ name, price, stock }) {
        this.name = name
        this.price = price
        this.stock = stock
    }
    
    /**
     *constructor(prod) {
        this.nameProduct = prod.name
        this.priceProduct = prod.price
        this.stockProduct = prod.stock
    }
     */

    
    //  constructor(prods) {
    //     this.list = prods.map(prod => prod.name + ': ' + `$${prod.price}`)
    // }
    
}

export function asDto(prods) {
    if(Array.isArray(prods))
        return prods.map(p => new ProductsDTO(p))
    else
        return new ProductsDTO(prods)
}