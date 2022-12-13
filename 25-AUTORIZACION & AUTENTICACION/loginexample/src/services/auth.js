import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { UserModel } from '../model/user.model.js';

const strategyOptions = {
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
};

const signup = async (req, username, password, done) => {
  console.log('SIGNUP!');
  try {
    const newUser = await UserModel.create({username, password});
    return done(null, newUser);
  } catch (error) {
    console.log(error);
    return done(null, false, { message: 'Error inesperado' });
  }
};

const login = async (req, username, password, done) => {
  console.log('LOGIN!');
  const user = await UserModel.findOne({username, password});
  if (!user) return done(null, false);
  console.log('USUARIO ENCONTRADO!');
  return done(null, user);
};

export const loginFunc = new LocalStrategy(strategyOptions, login);
export const signUpFunc = new LocalStrategy(strategyOptions, signup);

passport.serializeUser((user, done)=>{
  console.log('ejecuta serialize');
  done(null, user._id);
});

passport.deserializeUser( async(userId, done)=>{
  console.log('ejecuta deserialize');
  const user = await UserModel.findById(userId);
  return done(null, user);
});

