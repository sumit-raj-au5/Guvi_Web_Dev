const db = require("../mongo");

const helper = {
    getAllStudents(){
        return db.students.find().toArray();
    },
    getStudent(id){
        return db.students.findOne({"id_no":id});
    },
    getStudentWithoutMentor(){
        return db.students.find({"mentor_id":null}).toArray();
    },
    addStudent(body){
        return db.students.insertOne(body);
    },
    assignMentor(body){
        return db.students.findOneAndUpdate(
            { "id_no":body.id_no },
            { $set: {"mentor_id":body.mentor_id} },
            { returnDocument: "after" }
          );
    }
}

module.exports = helper;