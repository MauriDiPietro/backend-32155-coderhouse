const ProductModel = use('App/Models/Product');

class ProductController {
    async getProducts({view}){
        const products = (await ProductModel.all()).toJSON();
        console.log(products);
        const html = await view.render('products', { products });
        return html;
    }

    async storeProduct({ request }){
        const { name, description, price } = request.all();
        const product = await ProductModel.create({ name, description, price });
        return product;
    }

    async getProductById({ params }){
        const { id } = params;
        const product = await ProductModel.find(id);
        return product;
    }

    async deleteProduct({ params }){
        const { id } = params;
        const product = await ProductModel.find(id);
        await product.delete();
        return product;
    }

    async updateProduct({ params, request }){
        const { id } = params;
        const product = await ProductModel.find(id);
        product.merge(request.only('name'));
        await product.save();
        return product;
    }

}

module.exports = ProductController
