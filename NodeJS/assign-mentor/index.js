const express = require('express');
const app = express();
require('dotenv').config();

const mongo = require('./mongo');

//Import Routes
const students = require('./routes/students.routes');
const mentors = require('./routes/mentors.routes');

(async () => {
    //connecting mongodb
    await mongo.connect();

    //Middleware
    app.use(express.json());

    app.use((req,res,next)=>{
        console.log('Request Received');
        next();
    });

    //Routes
    app.use('/students', students);
    app.use('/mentors', mentors);
    app.use('/', (req,res)=>{res.send('Welcome Home')})

    //PORT
    app.listen(process.env.PORT, ()=>{
        console.log(`Server started on ${process.env.PORT}`);
    });
})();

