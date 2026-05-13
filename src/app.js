const express = require("express");
const cors = require("cors");
// Importing local files
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

connectDB();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Backend server is running successfully",
  });
});

module.exports = app;
