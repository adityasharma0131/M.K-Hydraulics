// models/socialModel.js
const mongoose = require("mongoose");

const socialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

module.exports = mongoose.model("Social", socialSchema);
