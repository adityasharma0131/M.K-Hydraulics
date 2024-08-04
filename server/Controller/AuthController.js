const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User"); // Adjust the path according to your project structure

const SECRET_KEY = "your_secret_key"; // Replace with your actual secret key

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User Already Exists",
        success: false,
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();

    // Respond with success message and token
    return res.status(201).json({
      message: "User created successfully",
      success: true,
      token,
    });
  } catch (error) {
    // Handle any errors
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
        success: false,
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
        success: false,
      });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });

    // Respond with success message and token
    return res.status(200).json({
      message: "Login successful",
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    // Handle any errors
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

module.exports = {
  signup,
  login,
};
