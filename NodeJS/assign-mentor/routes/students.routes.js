const router = require('express').Router();
const {addStudent, getStudents, getStudentWithoutMentor, assignMentor} = require('../services/students.services')

router.get('/', (req, res)=>{
    res.send("Make a POST request with JSON body on this endpoint to add a new students. Data sent should be id_no, Name, batch, mentor_id")
});

router.get('/allstudents', getStudents)
router.get('/allstudentswithoutmentor', getStudentWithoutMentor)
router.put('/assignmentor', assignMentor);
router.post('/', addStudent);

module.exports = router;