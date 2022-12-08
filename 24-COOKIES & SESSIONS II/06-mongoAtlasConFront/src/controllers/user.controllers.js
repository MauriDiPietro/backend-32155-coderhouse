import path from 'path'
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const users = [
    {
      nombre: 'juan',
      admin: true,
    },
    {
      nombre: 'jose',
      admin: false,
    }
]

export const loginPost = (req, res) => {
    const { nombre } = req.body;
   
    const index = users.findIndex((aUser) => aUser.nombre === nombre);
  
    if(index < 0)
      res.status(401).json({ msg: 'no estas autorizado' });
    else {

    req.session.nombre = nombre
    res.redirect('/home')
    }
    // res.json(req.session.nombre)
}

export const loginGet = (req, res) => {
  const nombre = req.session?.nombre
  if (nombre) {
      res.redirect('/')
  } else {
    res.sendFile(path.join(__dirname, '../../views/login.html'))
  }
}


export const visit = (req, res) => {
    req.session.info.contador++;
    res.json({
      msg: `${req.session.info.username} ha visitado el sitio ${req.session.info.contador} veces`,
    });
}

export const logout = (req, res) => {
  const nombre = req.session?.nombre
    if (nombre) {
        req.session.destroy(err => {
            if (!err) {
              console.log(__dirname)
                res.render(path.join(__dirname, '../../views/pages/logout.ejs'), { nombre })
            } else {
                res.redirect('/')
            }
        })
    } else {
            res.redirect('/')
    }
}


export const infoSession = (req, res) => {
  res.render(path.join(__dirname, '../../views/pages/home.ejs'), { nombre: req.session.nombre })
}

