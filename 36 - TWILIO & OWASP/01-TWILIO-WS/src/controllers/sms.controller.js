import { twilioClient } from "../services/sms.service.js";
import dotenv from 'dotenv';
dotenv.config();

export const sendWS = async(req, res) => {
    try {
      const message = {
        body: req.body.message,
        from: process.env.CEL,
        to: req.body.dest,
        mediaUrl: ['https://cadenaser.com/resizer/c09Az9WzwQFwSZPN90pP1dhNqQ8=/736x552/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/TOLWBLP2DRFWZPVWKRWIQ4WH3I.jpg']
      };
      const response = await twilioClient.messages.create(message);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
}

const sendMessageToClient = async (dest, message) => {
  const msg = {
    body: message,
    from: process.env.CEL,
    to: 'whatsapp:+' + dest,
  }
  await twilioClient.messages.create(msg);
} 

export const receiveWS = async (req, res) => {
  try {
    console.log(req.body);
    if(req.body.Body.toUpperCase().includes('HOLA')) {
      await sendMessageToClient(req.body.WaId, `Hola ${req.body.ProfileName}!, ¿Cual es tu consulta?`)
    }
    if(req.body.Body.toUpperCase().includes('CHAU')) {
      await sendMessageToClient(req.body.WaId, `Chau ${req.body.ProfileName}!, ¡Hasta pronto!`)
    }
  } catch (error) {
    console.log(error);
  }
}

export const healtCheck = (req, res) => {
  res.send('Server ok!');
}

