import DaoFile from "./dao-filesystem/filesystem.js";
import DaoMemory from "./dao-memory/memory.js";
import DaoMongoDB from "./dao-mongodb/mongodb.js";
import { productsSchema } from "./dao-mongodb/schema/products.schema.js";

let dao;
let argv = process.argv[2];

switch(argv) {
    case 'file':
        dao = new DaoFile('./src/daos/filesystem/db.json');
        console.log(argv);
        break;
    case 'mongo':
        dao = new DaoMongoDB('products', productsSchema);
        dao.initMongoDB();
        console.log(argv);
        break;
    default:
        dao = new DaoMemory();
        break;
};

export async function save(obj) {
    return await dao.save(obj);
};

export async function getAll() {
    return await dao.getAll();
};

export function getDao(){
    return dao;
};