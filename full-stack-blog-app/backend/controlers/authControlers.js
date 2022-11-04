const asyncHandler = require("express-async-handler");
const { db } = require("../db/db");

// %desc Register user
// route POST /api/auth/register
// @access Public
const register = asyncHandler(async (req, res) => {
  res.json("user registered");
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
