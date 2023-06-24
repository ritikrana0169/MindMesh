const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  userName: String,
  userId: String,
  createdAt: { type: Date, default: Date.now },
  data: []
});

const ReportModel = mongoose.model("Report", reportSchema);

module.exports = { ReportModel };
