const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
  userName: String
});

const ReportModel = mongoose.model("studentsReport", reportSchema);

module.exports = { ReportModel };
