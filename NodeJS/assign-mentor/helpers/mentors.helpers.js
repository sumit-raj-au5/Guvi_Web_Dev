const db = require('../mongo');
const helper={
    addMentor(body){
        return db.mentors.insertOne(body);
    },
    getAllMentors(){
        return db.mentors.find().toArray();
    },
    getAssignedStudents(id_no){
        id_no=+id_no
        return db.mentors.findOne({id_no});
    },
    assignStudents(id,body){
        id = +id;
        return db.mentors.findOneAndUpdate(
            { "id_no":id},
            { $set: {"assigned_student_id":body.student_id} },
            { returnDocument: "after" }
          );
    }
}

module.exports = helper;