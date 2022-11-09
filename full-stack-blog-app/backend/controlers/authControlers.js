const asyncHandler = require("express-async-handler");
const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400);
    return res.json("Please add all fields");
  }

  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    // Check Password
    const isPasswordCorrect = bcrypt.compareSync(password, data[0].password);

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");

    delete data[0].password;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(data[0]);
  });
});

// %desc Logout user
// route POST /api/auth/logout
// @access Private
const logout = asyncHandler(async (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out!");
});

module.exports = {
  register,
  login,
  logout,
};
