import express from 'express'
import postsRoutes from './routes/posts.routes.js'

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use('/posts', postsRoutes)

app.listen(PORT, ()=>{
    console.log(`Server OK on port: ${PORT}`)
})