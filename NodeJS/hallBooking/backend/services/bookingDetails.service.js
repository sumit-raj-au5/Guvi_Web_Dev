const helper = require('../helpers/bookingDetails.helper')

const service = {

    async allBookings(req, res){
        try{
            const data = await helper.getBookings();
            res.status(200).send({status:"success", data})
        }
        catch(err){
            console.log(err)
            res.status(500).send({status:"Error",Error:"Error in getting booking details"});
        }
    },

    async addBooking(req, res){
        try{
            const {insertedId} = await helper.addBooking(req.body);
            res.status(200).send({status:"success",data:{_id:insertedId, ...req.body}});
        }
        catch(err){
            console.log(err)
            res.status(500).send({status:"Error",Error:"Error in adding room"});
        }
        }
    }

module.exports = service;