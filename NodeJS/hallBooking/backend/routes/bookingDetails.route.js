const router = require('express').Router();
const {allBookings, addBooking} = require('../services/bookingDetails.service');

router.get('/', (req, res)=>{
    res.send("Make a POST request with JSON body on this endpoint to book a new room. Data sent should be 'Room no, Customer Name, Date, Start Time and ")
})

router.get('/customerdata', allBookings)

router.post('/', addBooking)

module.exports = router;