import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import db from './database/db.js';
import tasksRoutes from './routes/task.routes.js';
import userRoutes from './routes/user.routes.js';
// import passport from 'passport';
import UserModel from './models/user.model.js';
// import configPassport from './auth/passport.js';
import session from 'express-session';
import dotenv from 'dotenv';
dotenv.config();
import './database/asociations.js'
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT

const app = express();

/*DATABASE*/
db.sync({force:false})
.then(()=>{
    console.log('Conexión a la Base de datos exitosa')
})
.catch((err)=>{
    console.log(`Error al conectar a la Base de datos= ${err}`)
});

/*MIDDLEWARES*/
app.use(cors({ credentials: true, origin: process.env.REACT_APP }));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

/*SESSION*/
// app.use(session({
//     secret: process.env.SECRET,
//     resave: true,
//     saveUninitialized: true
// }));
app.use(cookieParser())
// app.use(passport.initialize());
// app.use(passport.session());


/*ROUTES*/
app.use('/tasks', tasksRoutes);
app.use('/users', userRoutes);



app.listen(PORT, ()=>{
    console.log(`Server ok on port= ${PORT}`)
});
