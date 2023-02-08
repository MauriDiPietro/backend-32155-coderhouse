import express from 'express'
import handlebars from 'express-handlebars'
import apiRouter from './routes/persons.js'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('hbs', handlebars({ extname: '.hbs', defaultLayout: 'index.hbs' }))
app.set('views', './views')
app.set('view engine', 'hbs')

app.use('/', apiRouter)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
