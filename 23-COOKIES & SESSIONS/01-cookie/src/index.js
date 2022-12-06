import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

const mySecret = 'mySecret';

app.use(cookieParser(mySecret));
app.use(express.json());

app.get('/set-normal-cookie', (req, res) => {
  res.cookie('idioma', 'ingles').json({ msg: 'OK' });
});

app.get('/set-signed-cookie', (req, res) => {
  res.cookie('nombre', 'lionel', { signed: true }).json({ msg: 'OK' });
});

app.get('/set2', (req, res) => {
  try {
    res.cookie('saludo', 'hola', { maxAge: 3000 }).send({ msg: 'OK' });
  } catch (err) {
    res.send(err);
  }
});

app.get('/get-cookies', (req, res) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send({
    cookies: req.cookies,
    signedCookies: req.signedCookies,
  });
});

app.get('/saludo', (req, res) => {
  console.log(req.cookies.signed);
  console.log(req.cookies);
  const message = req.cookies.idioma == 'ingles' ? 'Hello!' : 'Hola!';
  res.send({ msg: message });
});

app.get('/clear', (req, res) => {
  const cookies = req.cookies;

  console.log(cookies);

  const keys = Object.keys(cookies);
  // res.clearCookie('idioma')
  keys.forEach((aKey) => res.clearCookie(aKey));
  res.clearCookie('nombre', { signed: true });
  res.send({ msg: 'Cookie Clear' });
});


const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});
