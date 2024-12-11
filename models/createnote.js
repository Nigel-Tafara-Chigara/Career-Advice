const mongoose = require("mongoose");

const adviceSchema = new mongoose.Schema({
  program: String,
  advice: String,
});

const adviceModel = mongoose.model("advices", adviceSchema);
module.exports = adviceModel;
