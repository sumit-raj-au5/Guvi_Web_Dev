const helper = require('../helpers/addRoom.helper')

const service = {
    async getRoom(req, res){
        const data = await helper.getAllRooms();
        res.json({status:"Success", data});
    },

    async addRoom(req, res){
        try{
            const {insertedId} = await helper.addRoom(req.body);
            res.status(200).send({status:"success",data:{_id:insertedId, ...req.body}});
        }
        catch(err){
            console.log(err)
            res.status(500).send({status:"Error",Error:"Error in adding room"});
        }
        }
    }

module.exports = service;