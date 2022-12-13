import { Router } from 'express';
import path from 'path'
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

let usuarios = [
  { nombre: 'juan', password: '1234' },
  { nombre: 'jose', password: '123456' },
];

router.get('/', (req, res) => {
  // console.log(`SESSION =>${JSON.stringify(req.session)}`);
  if (req.session.nombre) {
    res.redirect('/datos');
  } else {
    res.render('login');
  }
});

router.get('/login', (req, res) => {
  res.render('login')
});


router.post('/login', (req, res) => {
  let { nombre, password } = req.body;
  //console.log(usuarios)
  //console.log(req.body)
  let credencialesOk = usuarios.filter(
    (usuario) => usuario.nombre == nombre && usuario.password == password
  ).length;
  if (credencialesOk) {
    req.session.nombre = nombre;
    req.session.contador = 0;
    res.redirect('/datos');
  } else {
    res.render('login-error', {});
  }
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', (req, res) => {
  let { nombre } = req.body;
  let encontrado = usuarios.filter(
    (usuario) => usuario.nombre == nombre
  ).length;
  if (!encontrado) {
    usuarios.push(req.body);
    req.session.nombre = nombre;
    req.session.contador = 0;
    res.redirect('/');
  } else {
    res.render('register-error', {});
  }
});

router.get('/datos', (req, res) => {
  if (req.session.nombre) {
    req.session.contador++;
    res.render('datos', {
      datos: usuarios.find((usuario) => usuario.nombre == req.session.nombre),
      contador: req.session.contador,
    });
  } else {
    res.redirect('/login');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/');
  });
});

export default router;
