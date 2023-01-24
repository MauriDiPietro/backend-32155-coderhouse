import { Router } from "express";
import { sendSNS, publishTopic } from "../controllers/email.controller.js";

const router = Router();

router.post('/subscribe', sendSNS);
router.post('/publish', publishTopic);

export default router;