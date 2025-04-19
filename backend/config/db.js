const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://aditysgoyal11:oQV3vGBNp4YE2Gxg@cluster0.wruvd5f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    console.log(" MONGO DB CONNECTED ");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
