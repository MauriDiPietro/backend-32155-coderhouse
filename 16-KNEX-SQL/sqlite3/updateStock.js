import ClientSql from "./sql.js";
import { options } from "./options/db.js";

const sql = new ClientSql(options);

async function update(stock, id){
    await sql.updateStockById(stock, id);
    console.log('stock actualizado!');
}

update(10, 1);