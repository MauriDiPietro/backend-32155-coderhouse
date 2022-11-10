import ClientSql from "./sql.js";
import { options } from "./options/db.js";

const sql = new ClientSql(options);

async function getAll(){
    const products = await sql.getAllProuducts();
    console.table(products);
}

getAll();