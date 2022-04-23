const nodemailer = require('nodemailer');
const {getRandomString} = require('../helpers/randomString.helpers');
const helper = require('../helpers/userauth.helpers');
require('dotenv').config();

const service = {
    async sendMailService(toMail, res){
        try{
            const transporter=nodemailer.createTransport({
                service:"outlook",
                auth:{
                    user:process.env.SENDER_MAIL,
                    pass:process.env.SENDER_PASSWORD
                }
            });
            const randomString = await getRandomString();
            const options = {
                from:process.env.SENDER_MAIL,
                to:toMail,
                subject:"Reset Password with NodeJs",
                text:`Reset your password with this link ${process.env.DEPLOYED_URL}/userauth/password-reset/${randomString}`
            };

            transporter.sendMail(options, (err, info)=>{
                if(err){
                    console.log(err);
                    res.status(500).send({status:"Error", Error:"Error sending mail"});
                }
                const data = helper.storeRandomString(toMail, randomString);
                console.log("sent" + info.response + "stored string" + data);
                res.status(200).send({status:"Mail sent"});
            });

        }
        catch(err){
            console.log(err);
            res.status(500).send({status:"Error", Error:"Error sending mail out"});
        }
    }
}

module.exports = service;


