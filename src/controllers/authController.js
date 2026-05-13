const bcrypt = require("bcryptjs"); // to hash and compare the password
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exisitingUser = await User.findOne({ email });

    if (exisitingUser) {
      return res
        .status(400)
        .json({ success: false, message: "user already exist" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message:
        err.message || "Internal server error while registering new user",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invaild credentials" });
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return res
        .status(400)
        .status({ success: false, message: "Invalid Credentials" });
    }

    if (user & !isPasswordMatched) {
      return res.status(400).json({
        success: false,
        message: "Entered Password is wrong, Try again!",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    return res.status(200).json({
      success: true,
      message: "Logged In Successfully",
      token,
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Internal Server Error while loggin, Please try after some time ${err?.message}`,
    });
  }
};

module.exports = { register, login };
