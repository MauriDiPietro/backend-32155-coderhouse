import { transporter } from "../services/email.service.js";
import { templateHtml } from '../services/template.js';

export const sendGmail = async(req, res) => {
    const { dest } = req.body;
    const mailOptions = {
        from: process.env.EMAIL,
        to: dest,
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
    try{
        const response = await transporter.sendMail(mailOptions);
        console.log('Email enviado!');
        res.json(response);
    }catch(error){
        console.log(error);
    }
};