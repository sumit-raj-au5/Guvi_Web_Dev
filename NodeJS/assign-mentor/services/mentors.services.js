const helper = require("../helpers/mentors.helpers");

const service = {
    async addMentor(req,res){
        try{
            const {insertedId} = await helper.addMentor(req.body);
            res.status(200).send({status:"Success", data:{_id:insertedId, ...req.body}});
        }
        catch(err){
            console.log(err);
            res.status(500).send({status:"Error", Error:"Error in adding mentor"})
        }
    },

    async getMentors(req, res){
        const data = await helper.getAllMentors();
        res.json({status:"Success", data});
    },

    async getAssignedStudents(req, res){
        try {
            const data = await helper.getAssignedStudents(req.params.id);
            res.json({ status: "success", Assigned_Student_id:data.assigned_student_id });
          } catch (err) {
            console.error("Error finding students assigned to mentor", err);
            res
              .status(500)
              .json({ status: "error", error: "Error finding student assiged to mentor" });
          }
    },

    async assignStudents(req, res){
        try {
            const { value } = await helper.assignStudents(req.params.id, req.body);
        res.json({
            status: "success",
            data: value,
         });
          } catch (err) {
            console.error("Error assigning students assigned to mentor", err);
            res
              .status(500)
              .json({ status: "error", error: "Error assigning student assiged to mentor" });
          }
    },
}

module.exports = service;