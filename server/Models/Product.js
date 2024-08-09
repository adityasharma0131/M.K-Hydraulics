const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // Category name
  categoryId: { type: Schema.Types.ObjectId, required: true }, // Category ID
  image: { type: String },
  smallDesc: { type: String },
  fullDesc: { type: String },
  features: { type: String },
  applications: { type: String },
  advantages: { type: String },
  additionalDesc: { type: String },
});

module.exports = mongoose.model("Product", ProductSchema);
