const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  categoryId: String,
  images: [String], // Array of image paths
  smallDesc: String,
  fullDesc: String,
  features: String,
  applications: String,
  advantages: String,
  additionalDesc: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
