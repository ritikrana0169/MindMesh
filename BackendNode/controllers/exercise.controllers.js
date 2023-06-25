require("dotenv").config()
const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
    apiKey: process.env.Api_key,
})
const openai = new OpenAIApi(configuration)
const { ReportModel } = require("../models/reports.model");

//this is to get questions
const getQuestions = async (req, res) => {
    const { track, level } = req.body;
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `give me 5 technical interview question of ${track} of ${level} level.`,
            max_tokens: 100
        })
        res.status(200).json({
            success: true,
            data: response.data.choices[0].text.split("\n")
        })
    } catch (error) {
        res.status(400).send("error")
    }
}

//this is to compare questions
const getCompare = async (req, res) => {
    const { question, answer } = req.body;
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `This is the question ${question} and this is my answer for it ${answer} please check and tell me only out of these given categories (verybad,bad,good,better,best) which category suits this answer?`,
            max_tokens: 100
        })
        res.status(200).json({
            success: true,
            data: response.data.choices[0].text
        })
    } catch (error) {
        res.status(400).send("error")
    }
}

//this is to save progress
const saveReport = async (req, res) => {
    const {userName,data} = req.body;
    try {
      let report = new ReportModel({userName,data});
      console.log(report)
      await report.save();

      res.status(200).send({
        success: true,
        msg: "Report saved successfully!"
      });
    } catch (error) {
        console.log(error)
      res.status(400).send("Couldn't save report!");
    }
};

const getProgressReport = async (req, res) => {
    const {_id} = req.body;

    try {
      let report = await ReportModel.findById(_id);

      let total=0;
      let Max=500;

      for (let ele of report.data){
        if(ele=="verybad"){
            total+=20
        }else if(ele=="bad"){
            total+=40
        }else if(ele=="good"){
            total+=60
        }else if(ele=="better"){
            total+=80
        }else if(ele=="best"){
            total+=100
        }
      }

      let percent=(total/Max)*100

      res.status(200).send({
        report:percent
      });
    } catch (error) {
        console.log(error)
      res.status(400).send("Couldn't find user!");
    }
};
  




module.exports = { getQuestions, getCompare, saveReport ,getProgressReport};

