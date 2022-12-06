import express from 'express';
import session from 'express-session';

const app = express();

const expiratedTime = 60000

app.use(
  session({
    secret: '123456789',
    saveUninitialized: true,
    cookie: { maxAge: expiratedTime },
    resave: true,
  })
);

app.get('/', (req, res) => {
  const { nombre } = req.query;
  
  if(nombre)
    req.session.nombre = nombre;

  req.session.contador = req.session.contador ? req.session.contador + 1 : 1;

  const mensaje = req.session.nombre ? `Bienvenido ${req.session.nombre}!` : 'Bienvenido!' ;
  res.json({
    mensaje : mensaje,
    contador: req.session.contador,
  });

});


app.get('/destroy', (req, res) => {
  req.session.destroy();
  res.json({ msg: 'session destruida' });
});

app.listen(8081, () => console.log(`Escuchando puerto 8081`));
