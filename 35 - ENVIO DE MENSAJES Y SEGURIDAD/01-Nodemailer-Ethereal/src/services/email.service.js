import { createTransport } from 'nodemailer';
import { templateHtml } from './template.js';
import dotenv from 'dotenv';
dotenv.config();

export const transporter = createTransport({
    host:process.env.HOST,
    port:process.env.PORT_ETHEREAL,
    auth: {
        user:process.env.EMAIL,
        pass:process.env.PASSWORD,
    }
});

export const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: '¡Bienvenido a la comisión 32155!',
    // text: 'Hola, te damos la bienvenida a nuestra comisión de backend.'
    // html: '<h1>Hola, te damos la bienvenida a nuestra comisión de backend.</h1>'
    html: templateHtml,
    attachments: [
        {
            path: process.cwd() + '/src/services/texto.txt',
            filename: 'texto-adjunto-32155'
        }
    ]
};