const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Mongoose Successfully...");
  } catch (err) {
    console.error("Unable to connect MongoDB", err);
    process.exit(1);
  }
};

module.exports = connectDB;
