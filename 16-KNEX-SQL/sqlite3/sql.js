import knex from 'knex';

class ClientSql {
    constructor(config) {
        this.knex = knex(config)
    }

    async createTable(){
        await this.knex.schema.dropTableIfExists('ecommerce');
        await this.knex.schema.createTable('ecommerce', table => {
            table.increments('id').primary();
            table.string('name', 50).notNullable();
            table.string('code', 100).notNullable();
            table.integer('price');
            table.integer('stock');
        })
    }

    async getAllProuducts() {
        // return await this.knex.from('ecommerce').select('*');
        return await this.knex.select('*').from('ecommerce');
        //select * from ecommerce;
    }

    async insertProduct(product) {
        await this.knex('ecommerce').insert(product);
    }

    async deleteProductById(id){
        await this.knex.from('ecommerce').where('id', id).del();
    }

    async updateStockById(stock, id){
        await this.knex.from('ecommerce').where('id', id).update({stock: stock});
    }

    async close(){
        await this.knex.destroy();
    }
}

export default ClientSql;