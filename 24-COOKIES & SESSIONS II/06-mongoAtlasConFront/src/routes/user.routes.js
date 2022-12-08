import { Router } from 'express';
const router = Router();
import { logout, visit, infoSession, loginPost, loginGet } from '../controllers/user.controllers.js';
import { validateLogIn } from '../middlewares/middlewares.js'

router.post('/login', loginPost);

router.get('/', loginGet);

router.get('/home', validateLogIn, infoSession);

router.get('/secret-endpoint', validateLogIn, visit);

router.get('/logout', logout);

export default router;

