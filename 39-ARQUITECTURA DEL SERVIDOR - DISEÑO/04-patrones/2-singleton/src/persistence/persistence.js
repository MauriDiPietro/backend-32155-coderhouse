import File from "./filesystem/filesystem.js";
import Memory from "./memory/memory.js";
import MongoDB from "./mongodb/mongodb.js";
import { productsSchema } from "./mongodb/schema/products.schema.js";
import { initMongoDB } from "./mongodb/mongodb.js";

let persistence;
let argv = process.argv[2];

switch(argv) {
    case 'file':
        persistence = new File('./src/persistence/filesystem/db.json');
        console.log(argv);
        break;
    case 'mongo':
        persistence = new MongoDB('products', productsSchema);
        initMongoDB();
        console.log(argv);
        break;
    default:
        persistence = new Memory();
        break;
};

export async function save(obj) {
    return await persistence.save(obj);
};

export async function getAll() {
    return await persistence.getAll();
};