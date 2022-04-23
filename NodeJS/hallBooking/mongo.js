const {MongoClient} = require("mongodb");
//const mongoose = require('mongoose')
require("dotenv").config();

const mongo = {
    //DB String
    db:null,

    //Collections
    all_rooms: null,
    booking_data: null,
    

    async connect(){
        //Database Connection
        //const PORT = process.env.PORT;
        const client = new MongoClient(process.env.MONGODB_URL);
        await client.connect();
        console.log(`MongoDB Connected - ${process.env.MONGODB_URL}`);
        
        //Selecting Database
        this.db = client.db(process.env.MONGODB_NAME);
        console.log(`Database Selected - ${process.env.MONGODB_NAME}`);
        
        //Initialize Collections
        this.all_rooms = this.db.collection("all_rooms")
        this.booking_data = this.db.collection("booking_data")
    },

};

module.exports = mongo;