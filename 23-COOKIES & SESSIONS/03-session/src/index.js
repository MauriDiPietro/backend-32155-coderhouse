import express from 'express';
import session from 'express-session';
import util from 'util';

const app = express();

app.use(express.json());

const sessionConfig = {
    secret: 'thisismysecret', 
    cookie: { maxAge: 60000 },  
    saveUninitialized: true, 
    resave: false,            
}

app.use(session(sessionConfig));

const users = [
  {
    username: 'juan',
    password : '1234',
    admin: true,
  },
  {
    username: 'jose',
    password : '123456',
    admin: false,
  }
]


app.post('/login', (req, res) => {
  const { username, password } = req.body;
 
  const index = users.findIndex((aUser) => aUser.username === username && aUser.password === password);
  
  console.log(index)
 
  if(index < 0)

    res.status(401).json({ msg: 'no estas registrado' });
  else {
  
    const user = users[index];
    req.session.info = {
      loggedIn: true, 
      contador: 1,   
      admin: user.admin,  
    }

    // req.session.loggedIn = true
    // req.session.admin = user.admin

    res.json({msg: 'Bienvenido!!'})
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({ msg: 'session destruida' });
});


const validateLogIn = (req, res, next) => {
  console.log(util.inspect(req.session, true, 7, true))
  if (req.session.info.loggedIn) next();
  else res.status(401).json({ msg: 'no estas autorizado' });
};

const isAdmin = (req, res, next) => {
  if (req.session.info.admin) next();
  else res.status(401).json({ msg: 'no sos administrador' });
};

app.get('/secret-endpoint', validateLogIn, (req, res) => {
  req.session.info.contador++;
  res.json({
    msg: 'informacion super secreta',
    contador: req.session.info.contador,
    session: req.session
  });
});

app.get('/admin-secret-endpoint', validateLogIn, isAdmin, (req, res) => {
  req.session.info.contador++;
  res.json({
    msg: 'acá acceden solo los user admins',
    contador: req.session.info.contador,
    session: req.session 
  });
});


app.listen(8081, () => console.log(`Escuchando puerto 8080`));
