import sns from "../services/email.service.js";

export const sendSNS = async(req, res) => {
    const params = {
        Protocol: 'email',
        TopicArn: 'arn:aws:sns:us-east-1:134074278430:tema-prueba',
        Endpoint: req.body.email
    };
    sns.subscribe(params, (err, data) => {
        if(err) console.log(err);
        res.json(data);
    });
};

export const publishTopic = async(req, res) =>{
    const params = {
        Subject: req.body.subject,
        Message: req.body.message,
        TopicArn: 'arn:aws:sns:us-east-1:134074278430:tema-prueba',
    }
    sns.publish(params, (err, data) => {
        if(err) console.log(err);
        res.json(data);
    });
}