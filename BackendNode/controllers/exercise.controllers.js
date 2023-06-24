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
            prompt: `give me 5 interview question of ${track} of ${level} level.`,
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
            prompt: `This is the question ${question} and this is my answer for it ${answer} please evaluate as you are my teacher tell me only out of these three category(verybad,bad,good,better,best) where does my answer may stand?`,
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
    const {userName} = req.body;
    try {
      let report = new ReportModel({ userName});
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
  



module.exports = { getQuestions, getCompare, saveReport };
//for testing
// const questions = (req, res) => { 
//     res.send("api warning")
// }

// module.exports={getQuestions,getCompare,questions}
