import passport from 'passport';
import { Router } from "express";
import { signUp, login, getHome } from '../controllers/user.controllers.js';
import { isLoggedIn } from '../middlewares/user.middlewares.js';

const router = Router();

const passportOptions = { badRequestMessage: 'falta username / password' };

router.post('/signup', signUp);

router.post('/login', passport.authenticate('login', passportOptions), login);

router.get('/home', isLoggedIn, getHome )

export default router;

