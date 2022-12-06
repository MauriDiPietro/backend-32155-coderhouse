import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

const mySecret = 'mySecret';
app.use(cookieParser(mySecret));

app.use(express.json());

app.post('/cookies', (req, res) => {
  const { key, value, time, signed } = req.body;
  const options = {};

  if(time) options.maxAge = time;
  if(signed) options.signed = signed;

  if(key && value) {
    res.cookie(key, value, options).send({proceso: 'ok'});
  } else {
    res.send('error')
  }
});

app.get('/cookies', (req, res) => {
  res.json({
    normales: req.cookies,
    firmadas: req.signedCookies,
  })
});

app.delete('/cookies/:cookieKey', (req, res) => {
  const { cookieKey } = req.params;
  res.clearCookie(cookieKey).send('cookie deleted');
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});
