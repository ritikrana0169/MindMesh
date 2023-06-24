const express=require("express");
const { getQuestions, getCompare, saveReport } = require("../controllers/exercise.controllers");
const exerciseRouter=express.Router()

exerciseRouter.post("/getquestions",getQuestions)

exerciseRouter.post("/compare",getCompare)

exerciseRouter.post("/save-report",saveReport)

module.exports={exerciseRouter};