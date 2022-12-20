import dotenv from 'dotenv';
dotenv.config()
import config from './config/index.js'
// const dotenv = require('dotenv')
// require('dotenv').config()

// dotenv.config({
//     path: './entrega.env'
// })  

// const modo = process.argv[2]

// modo === 'entregado' ? 
//     dotenv.config({
//         path: './entrega.env'
//     }) 
//     :
//     dotenv.config({
//         path: './desarrollo.env'
//     }) 
    

console.log(config.MONGO_ATLAS);

