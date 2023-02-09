import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()
import postsRoutes from './routes/posts.routes.js'
import db from './db/db.js'

const PORT = process.env.PORT

const app = express()

db.sync({ force: false })
    .then(()=>{
        console.log('Conexión a la base de datos exitosa!');
    })
    .catch((err)=>{
        console.log(err.message);
    })

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use('/posts', postsRoutes)

app.listen(PORT, ()=>{
    console.log(`Server OK on port: ${PORT}`)
})