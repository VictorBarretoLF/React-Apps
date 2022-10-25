const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const User = require("../model/userModel");

// %desc Register new user
// route POST /api/users
// @access Public
const registerUser = asyncHandler(async (request, response) => {
  const { username, email, password } = request.body;

  if (!username || !email || !password) {
    response.status(400);
    throw new Error("Please add all fields!");
  }

  const emailExists = await User.findOne({ email });
  const userExists = await User.findOne({ username });

  if (emailExists) {
    response.status(400);
    throw new Error("Email already in use!");
  }

  if (userExists) {
    response.status(400);
    throw new Error("Username already in use!");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    response.status(201).json(user);
  } else {
    response.status(400);
    throw new Error("Invalid user data");
  }
});

module.exports = {
  registerUser,
};
