const db = require("../../mongo");

const helper = {
    getBookings(){
        return db.booking_data.find().toArray();
    },
    
    addBooking(body){
        return db.booking_data.insertOne(body);
    }
}

module.exports = helper;