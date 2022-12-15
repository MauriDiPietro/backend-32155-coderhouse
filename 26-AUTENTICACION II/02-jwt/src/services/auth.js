import Config from '../config/index.js';
import { UserModel } from '../models/user.js';
import jwt from 'jsonwebtoken';

export const generateAuthToken = (user) => {
  const payload = {
    userId: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    admin: user.admin,
  };


  const token = jwt.sign(payload, Config.TOKEN_SECRET_KEY, {
    expiresIn: '10m',    //'1h'
  });
  return token;
};

export const checkAuth = async (req, res, next) => {

  const token = req.headers['x-auth-token'];
  console.log('token', token)

  if (!token) return res.status(401).json({ msg: 'Unauthorized' });

  try {
    const decode = jwt.verify(
      token,
      Config.TOKEN_SECRET_KEY
    );
    console.log('TOKEN DECODIFICADO');
    console.log(decode);
    const user = await UserModel.findById(decode.userId);

    if (!user) return res.status(400).json({ msg: 'Unauthorized' });
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ msg: 'Unauthorized' });
  }
};
