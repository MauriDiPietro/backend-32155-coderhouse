import ClientSql from "./sql.js";
import { options } from "./options/db.js";

const sql = new ClientSql(options);

async function deleteProduct(id){
    await sql.deleteProductById(id)
    console.log('producto eliminado!');
}

deleteProduct(7);