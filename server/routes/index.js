const express = require("express");
const router = express.Router();
const Category = require("../Models/Category");
const multer = require("multer");
const Image = require("../Models/Gallery");
const Contact = require("../Models/Contact");
const UserModel = require("../Models/User"); // Adjust the path according to your project structure

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

router.post("/contact-submit", async (req, res) => {
  try {
    const { name, email, organization, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      organization,
      message,
    });

    await newContact.save();
    res
      .status(201)
      .json({ success: true, message: "Contact form submitted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
});

router.get("/recent-queries", async (req, res) => {
  try {
    const queries = await Contact.find(); // Adjust query as needed
    res.json(queries);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/admin-users", async (req, res) => {
  try {
    console.log("Fetching admin users..."); // Debugging log
    const users = await UserModel.find(); // Fetch users from the database

    res.status(200).json(users); // Send a successful response
  } catch (error) {
    console.error("Error fetching admin users:", error); // Log error details
    res.status(500).json({ message: "Server error", error: error.message }); // Send error response
  }
});

// Backend Route for Categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find(); // Adjust query as needed
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


router.get("/gallery", async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
