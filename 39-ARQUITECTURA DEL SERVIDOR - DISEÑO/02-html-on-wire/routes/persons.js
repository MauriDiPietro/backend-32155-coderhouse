import { Router } from "express";
import * as controller from '../controller/persons.js';

const router = Router();

router.get('/html-onwire', controller.getHtmlOnwire);
router.post('/html-onwire', controller.postHtmlOnwire);

export default router;