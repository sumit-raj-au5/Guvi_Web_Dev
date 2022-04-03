const express = require('express')
const fs = require('fs')

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send("Hi! You can create a new file with current timestap by going on /createfile endpoint");
})

app.get('/createfile', (req,res)=>{
    let date =  new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let timeStamp = `${day}-${month}-${year}-${hour}-${min}-${sec}`
    
    fs.writeFile(`./Files/${timeStamp}.txt`, `${timeStamp}`, function (err) {
        if (err) throw err;
        res.send(`File ${timeStamp}.txt created`)
        console.log(`File ${timeStamp}.txt created`);
      });
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})