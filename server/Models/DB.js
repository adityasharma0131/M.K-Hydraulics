const mongoose = require("mongoose");

// Connect to MongoDB Atlas cluster
const connect = mongoose.connect(
  "mongodb+srv://adityasharma0431:anant99@cluster0.saskl2m.mongodb.net/"
);

connect
  .then(() => {
    // console.log("Database Connected Successfully!!");
  })
  .catch((error) => {
    // console.error("Error Connecting Database!", error);
  });
