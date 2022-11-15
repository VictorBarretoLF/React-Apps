const asyncHandler = require("express-async-handler");
const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// %desc Register user
// route POST /api/auth/register
// @access Public
const register = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // check if user exists
  const usernameExists = await prisma.user.findUnique({
    where: { username },
  });

  const emailExists = await prisma.user.findUnique({
    where: { email },
  });

  if (usernameExists || emailExists) {
    throw new Error("Username or e-mail current in use!");
  }

  // Hash password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  if (user) {
    res.status(201).json({
      id: user.id,
      name: user.username,
      email: user.email,
    });
  } else {
    response.status(400);
    throw new Error("Invalid user data");
  }

});

// %desc Login user
// route POST /api/auth/login
// @access Public
const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json("Please add all fields");
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
