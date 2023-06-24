const express=require("express");
const { getQuestions, getCompare,questions } = require("../controllers/exercise.controllers");
const exerciseRouter=express.Router()

exerciseRouter.post("/getquestions",getQuestions)

exerciseRouter.post("/compare", getCompare)
//for testing purposes
exerciseRouter.get("/questions", questions)

module.exports={exerciseRouter};