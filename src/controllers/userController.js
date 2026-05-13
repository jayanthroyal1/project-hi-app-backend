const User = require("../models/User");

const getCurrentUsers = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // we should not send password hashes to frontend
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "User Found", data: user });
  } catch (err) {
    console.log("getCurrentUser", err);
    return res.status(500).json({ success: false, message: err.message });
  }
};

const getAdmin = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "welcome Admin",
  });
};

module.exports = { getCurrentUsers, getAdmin };
