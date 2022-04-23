const router = require('express').Router();
const { getRoom, addRoom } = require('../services/addRoom.service');

router.get('/', (req, res)=>{
    res.send("Make a POST request with JSON body on this endpoint to add a new room. Data sent should be 'Number of beds available, amenities in the room, price for a day")
})

router.get('/roomdetails', getRoom)

router.post('/', addRoom);

module.exports = router;