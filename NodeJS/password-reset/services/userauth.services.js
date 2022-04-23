const helper = require('../helpers/userauth.helpers');
const {sendMailService} = require('./sendmail.services');

const service = {
    async signin(req,res){
        try{
            const data = await helper.getUser(req.body.email);
            if(data){
                const stored_password=data.password;
                const entered_password=req.body.password;
                if(stored_password===entered_password){
                    res.status(200).send({status:"Login Success"});
                }
                else{
                    res.status(401).send({status:"Error", Error:"Wrong Email or Password"});
                }
            }
            else{
                res.status(401).send({status:"Error", Error:"User doesn't exist"});
            }
        }
        catch(err){
            console.log(err);
            res.status(500).send({status:"Error", Error:"Error signing in"});
        }
    },

    async signup(req,res){
        try{
            const data = await helper.createUser(req.body.email, req.body.password);
            if(data){
                    res.status(200).send({status:"Signup Success"});  
            }
            else{
                res.status(501).send({status:"Error", Error:"Error Signining Up"});
            }
        }
        catch(err){
            console.log(err);
            res.status(500).send({status:"Error", Error:"Error signing up"});
        }
    },

    async sendResetPasswordLink(req,res){
        try{
            const data = await helper.getUser(req.body.email);
            if(data){
               const mailResponse = sendMailService(req.body.email);
                console.log(`mail response ${mailResponse}`);
                res.status(200).send({status:"Mail sent to reset password"});
            }
            else{
                res.status(401).send({status:"Error", Error:"User doesn't exist"});
            }
        }
        catch(err){
            console.log(err);
            res.status(500).send({status:"Error", Error:"Error resetting password"});
        }  
    },

    async resetPassword(req,res){
        try{
            const data = await helper.getUser(req.body.email);
            if(data){
                const stored_string=data.string;
                const entered_string=req.params.urlString;
                if(stored_string===entered_string){
                    const resetPasswordData = await helper.resetPassword(data.email, req.body.password)
                    res.status(200).send({status:"Password reset success", data:resetPasswordData});
                }
                else{
                    res.status(401).send({status:"Error", Error:"Wrong Email or Password"});
                }
        }
    }
        catch(err){
            console.log(err);
            res.status(500).send({status:"Error", Error:"Error resetting password"});
        }
    }
}

module.exports = service;