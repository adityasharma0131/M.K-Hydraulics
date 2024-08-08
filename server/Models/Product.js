const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  category: mongoose.Schema.Types.ObjectId, // Assuming categories are stored as ObjectIds
  image: String,
  smallDesc: String,
  fullDesc: String,
  features: String,
  applications: String,
  advantages: String,
  additionalDesc: String,
});

module.exports = mongoose.model("Product", ProductSchema);
