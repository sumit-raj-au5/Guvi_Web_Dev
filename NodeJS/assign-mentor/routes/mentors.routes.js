const router = require('express').Router();

const {addMentor, getMentors, getAssignedStudents, assignStudents} = require('../services/mentors.services');

router.get('/', (req,res)=>{
    res.send("Make a POST request with JSON body on this endpoint to add a mentor. Data should be id_no, name, assigned_students");
})
router.get('/allmentors', getMentors);
router.get('/:id', getAssignedStudents);
router.post('/', addMentor);
router.put('/:id', assignStudents)

module.exports = router;