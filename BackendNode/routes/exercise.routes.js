const express=require("express");
const { getQuestions, getCompare } = require("../controllers/exercise.controllers");
const exerciseRouter=express.Router()

exerciseRouter.post("/getquestions",getQuestions)

exerciseRouter.post("/compare",getCompare)

module.exports={exerciseRouter};