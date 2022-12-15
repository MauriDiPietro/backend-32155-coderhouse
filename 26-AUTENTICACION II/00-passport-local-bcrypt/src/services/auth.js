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
    const newUser = new UserModel({username, password});
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    return done(null, newUser);
  } catch (error) {
    console.log(error);
    return done(null, false, { message: 'Error inesperado' });
  }
};

const login = async (req, username, password, done) => {
  console.log('LOGIN!');
  const user = await UserModel.findOne({username});
  if (!user) {
    return done(null, false, { message: 'User not found' });
  } else {
    const match = await user.matchPassword(password);
    match ? done(null, user) : done(null, false);
  }
  console.log('USUARIO ENCONTRADO!');
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

