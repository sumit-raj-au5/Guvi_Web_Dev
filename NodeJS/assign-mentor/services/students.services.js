const helper = require('../helpers/students.helpers')

const service = {
    async getStudents(req, res){
        const data = await helper.getAllStudents();
        res.json({status:"Success", data});
    },

    async getStudentWithoutMentor(req,res){
        const data = await helper.getStudentWithoutMentor();
        res.json({status:"Success", data});
    },

    async addStudent(req, res){
        try{
            const {insertedId} = await helper.addStudent(req.body);
            res.status(200).send({status:"success",data:{_id:insertedId, ...req.body}});
        }
        catch(err){
            console.log(err)
            res.status(500).send({status:"Error",Error:"Error in adding Student"});
        }
        },

        async assignMentor(req, res){
            try{
                const {value} = await helper.assignMentor(req.body);
                res.json({satus:"Success", data:value});
            }
            catch(err){
                console.log(err);
                res.status(500).send({status:"Error", Error:"Error in assigning mentor to a student"})
            }
        }
    }

module.exports = service;