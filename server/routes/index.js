const express = require("express");
const router = express.Router();
const Category = require("../Models/Category");

// Add a new category
router.post("/add-category", async (req, res) => {
  const { name } = req.body;

  try {
    // Check if category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res
        .status(400)
        .json({ success: false, message: "Category already exists" });
    }

    // Create new category
    const newCategory = new Category({ name });
    await newCategory.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Category added successfully",
        category: newCategory,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
});

module.exports = router;
