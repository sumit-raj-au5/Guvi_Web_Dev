const express = require('express');
const app = express();
const mongo = require('./mongo');
require('dotenv').config();

//importing Routes
const userauth = require('./routers/userauth.routes');

(async () =>{
    //connecting mongo
    await mongo.connect();

    //Middleware
    app.use(express.json());
    app.use((req,res,next)=>{
        console.log('Request Received');
        next();
    });

    //Routes
    app.use('/userauth', userauth);
    app.use('/', (req,res)=>{
        res.send('Welcome Home');
    });

    //PORT
    app.listen(process.env.PORT||3000, ()=>{
        console.log(`Server running on ${process.env.PORT}`);
    });
})();

