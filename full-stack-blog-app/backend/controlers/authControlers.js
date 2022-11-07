const asyncHandler = require("express-async-handler");
const db = require("../config/db");
var bcrypt = require("bcryptjs");

// %desc Register user
// route POST /api/auth/register
// @access Public
const register = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  // check for existing user
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(q, [email, username], (err, data) => {
    if (err) return res.json(err);

    if (data.length) return res.status(409).json("User already exists!");

    // hash password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const q2 = "INSERT INTO users(username, email, password) VALUES (?, ?, ?)";
    const values = [username, email, hashPassword];

    db.query(q2, values, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created!");
    });
  });
});

// %desc Login user
// route POST /api/auth/login
// @access Public
const login = asyncHandler(async (req, res) => {
  res.json("user login");
});

// %desc Logout user
// route POST /api/auth/logout
// @access Private
const logout = asyncHandler(async (req, res) => {
  res.json("user logout");
});

module.exports = {
  register,
  login,
  logout,
};
