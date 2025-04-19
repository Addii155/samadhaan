const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://aditysgoyal11:hOmNIWD3H0jiXttm@cluster0.77vklin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    console.log(" MONGO DB CONNECTED ");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);

    process.exit(1);
  }
};
module.exports = connectDB;
