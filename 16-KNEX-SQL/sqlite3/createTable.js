import ClientSql from "./sql.js";
import { options } from "./options/db.js";

const sql = new ClientSql(options);

async function createTableSqlite3(){
    await sql.createTable();
    console.log('Tabla cerada con éxito!');
}

createTableSqlite3();