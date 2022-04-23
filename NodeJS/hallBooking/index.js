const express = require('express');
const app = express();
require("dotenv").config();
const mongo = require("./mongo");

//Route Imports
const addRoom = require("./backend/routes/addRoom.route");
const bookingDetails = require("./backend/routes/bookingDetails.route");

(async () => {
    await mongo.connect();

    //Middlewares
    app.use(express.json());

    app.use((req, res, next) => {
        console.log("Request received");
        next();
    });

    //Routes
    app.use('/addroom', addRoom);
    app.use('/bookingdetails', bookingDetails)
    app.use('/', (req, res)=>{
        res.send('Welcome Home again')
    })
  
    //PORT
    app.listen(process.env.PORT||3500, ()=>{
        console.log(`Server started on ${process.env.PORT}`)
    })
})();



