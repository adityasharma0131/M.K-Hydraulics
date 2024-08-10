const express = require("express");
const router = express.Router();
const Category = require("../Models/Category");
const multer = require("multer");
const Image = require("../Models/Gallery");
const Contact = require("../Models/Contact");
const UserModel = require("../Models/User");
const Social = require("../Models/Social");
const Product = require("../Models/Product");

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

router.get("/contact-queries", async (req, res) => {
  try {
    const queries = await Contact.find(); // Fetch all contact queries
    res.json(queries);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get a single contact query by ID
router.get("/contact-queries/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
      res.json(contact);
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a contact query by ID
router.delete("/contact-queries/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (contact) {
      res.json({ message: "Contact deleted successfully" });
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
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

router.delete("/gallery/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Image.findByIdAndDelete(id);
    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/categories/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a category
router.put("/categories/:id", async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Name is required" });
  }

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );

    if (!updatedCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    res.json({ success: true, message: "Category updated successfully" });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Delete a category
router.delete("/categories/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);

    if (!deletedCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    res.json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get a single user by ID
router.get("/admin-users/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a user
router.put("/admin-users/:id", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findById(req.params.id);

    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.password = password || user.password; // Hash the password in production
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a user
router.delete("/admin-users/:id", async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (user) {
      res.json({ message: "User deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all social media accounts
router.get("/socials", async (req, res) => {
  try {
    const socials = await Social.find();
    res.json(socials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single social media account by ID
router.get("/socials/:id", async (req, res) => {
  try {
    const social = await Social.findById(req.params.id);
    if (!social) return res.status(404).json({ message: "Social not found" });
    res.json(social);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a social media account
router.put("/socials/:id", async (req, res) => {
  try {
    const { name, link } = req.body;
    const social = await Social.findByIdAndUpdate(
      req.params.id,
      { name, link },
      { new: true, runValidators: true }
    );
    if (!social) return res.status(404).json({ message: "Social not found" });
    res.json(social);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/social-links", async (req, res) => {
  try {
    const socialLinks = await Social.find(); // Adjust the model name if necessary
    res.status(200).json(socialLinks);
  } catch (error) {
    console.error("Error fetching social links:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/products", async (req, res) => {
  const { categoryId } = req.query;

  try {
    // If categoryId is provided, filter by it; otherwise, return all products
    const products = categoryId
      ? await Product.find({ categoryId }) // Adjust field name if needed
      : await Product.find();

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/products-home", async (req, res) => {
  const { categoryId, limit } = req.query;

  try {
    // Set default limit to 3 if not provided
    const productsLimit = parseInt(limit) || 3;

    // If categoryId is provided, filter by it; otherwise, return all products
    const products = categoryId
      ? await Product.find({ categoryId }).limit(productsLimit)
      : await Product.find().limit(productsLimit);

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post(
  "/products",
  upload.array("images", 3), // Adjust the number of images allowed if necessary
  async (req, res) => {
    try {
      const product = new Product({
        name: req.body.name,
        category: req.body.category,
        categoryId: req.body.categoryId,
        images: req.files.map((file) => file.path),
        smallDesc: req.body.smallDesc,
        fullDesc: req.body.fullDesc,
        features: req.body.features,
        applications: req.body.applications,
        advantages: req.body.advantages,
        additionalDesc: req.body.additionalDesc,
      });

      await product.save();
      res.status(201).json({ message: "Product added successfully!" });
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({ error: "Failed to add product." });
    }
  }
);

router.delete("/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.send("Product deleted");
  } catch (error) {
    res.status(500).send("Error deleting product");
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update product route
router.put("/products/:id", upload.array("images", 3), async (req, res) => {
  try {
    const updates = req.body;

    // Handle image file uploads
    if (req.files && req.files.length > 0) {
      updates.images = req.files.map((file) => file.path);
    }

    const product = await Product.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(400).json({ error: err.message });
  }
});

// backend/routes/product.js
router.get("/single-product/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
module.exports = router;
