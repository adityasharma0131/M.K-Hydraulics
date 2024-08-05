const express = require("express");
const router = express.Router();
const Category = require("../Models/Category");
const multer = require("multer");
const Image = require("../Models/Gallery");

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

    res.status(201).json({
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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Upload image
router.post("/upload-image", upload.single("image-file"), async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    const newImage = new Image({
      filename: file.filename,
      path: file.path,
      size: file.size,
      mimetype: file.mimetype,
    });

    await newImage.save();
    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      image: newImage,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
});

module.exports = router;
