import dotenv from 'dotenv'
dotenv.config()
import knex from 'knex'

const db = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'coderhouse'
    }
});

export default db;