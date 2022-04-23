const db = require("../../mongo");

const helper = {
    getAllRooms(){
        return db.all_rooms.aggregate([{$lookup:{from:"booking_data", localField:"room_no", foreignField:"room_no", as:"customer_name"}}]).toArray();
    },

    addRoom(body){
        return db.all_rooms.insertOne(body);
    }
}

module.exports = helper;