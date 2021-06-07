const express = require('express')
const router = express.Router();
const Student = require('../models/student');
const student1 = new Student({name: "Cerine" , roll:"student" , present:true})
student1.save((error)=> {
    if(error){
        return console.log('Error has occured: ${error}');
    }
    console.log('Document is successfully saved.');
});
router.get('/students', function(req,res,next){
    Student.find({}).then(function(students){
        res.send(students);
    }).catch(next);
});
router.post('/students', function(req,res,next){
    Student.create(req,body).then(function(student){
        res.send(student);
    }).catch(next);
});
router.put('/students/:id', function(req,res,next){
    Student.findOneAndUpdate({_id:req.params.id},req,body).then(function(student){
        Student.findOne({_id:req.params.id}.then(function(student){
            res.send(student);
        });
        
    });
});