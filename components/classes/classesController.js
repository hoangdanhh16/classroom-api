const express = require('express');
const router = express.Router();

const Class = require('./classesModel');

/* GET users listing. */
module.exports = {
    getClass: async(req, res) => {
        try{
            const cls = await Class.find();
            res.json(cls);
            
        }catch(err){
            res.json({message: err});
        }
    },
    postAdd: async(req, res, next) => {
        try {
            const cls = new Class ({
                name: req.body.name,
                teacher: req.body.teacher,
                description: req.body.description,
                numStudent: req.body.numStudent,
            });
            const saved = await cls.save();
            res.json(saved);
        } catch(err) {
            next(err);
        }
    }
};


