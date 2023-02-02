import { Router } from "express";
import { sendWS, healtCheck, receiveWS } from '../controllers/sms.controller.js';

const router = Router();

router.get('/', healtCheck);
router.post('/whatsapp', sendWS); 
router.post('/inbox', receiveWS); 

export default router;

