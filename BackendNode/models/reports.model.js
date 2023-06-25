const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  email:{type:String,required:true},
  createdAt: { type: Date, default: Date.now },
  data: []
});

const ReportModel = mongoose.model("Report", reportSchema);

module.exports = { ReportModel };
