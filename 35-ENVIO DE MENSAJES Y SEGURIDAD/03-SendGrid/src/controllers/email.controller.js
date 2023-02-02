import sgMail from "../services/email.service.js";

export const sendGmail = async(req, res) => {
    const { dest } = req.body;
    const mailOptions = {
        from: process.env.EMAIL,
        to: dest,
        subject: '¡Bienvenido a la comisión 32155!',
        // text: 'Hola, te damos la bienvenida a nuestra comisión de backend.'
        html: '<h1>Hola, te damos la bienvenida a nuestra comisión de backend.</h1>',
        // html: templateHtml
        mail_settings: {
            sandbox_mode: {
                enable: true,
            }
        }
    };
    try{
        const response = await sgMail.send(mailOptions);
        console.log('Email enviado!');
        res.json(response);
    }catch(error){
        console.log(error);
    }
};