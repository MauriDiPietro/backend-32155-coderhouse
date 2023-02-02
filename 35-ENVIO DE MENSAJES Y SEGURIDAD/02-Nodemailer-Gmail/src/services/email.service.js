import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const transporter = createTransport({
    // host:'smtp.gmail.com',
    service: 'gmail',
    port:process.env.PORT_GMAIL,
    auth: {
        user:process.env.EMAIL,
        pass:process.env.PASSWORD,
    }
});

