const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

// %desc Register new user
// route POST /api/users
// @access Public
const registerUser = asyncHandler(async (request, response) => {
  const { name, email, password } = request.body;
  // check if the form is completed or not
  if (!name || !email || !password) {
    response.status(400);
    throw new Error("Please add all fields");
  }
  // check if the user exists
  const userExists = await User.findOne({ email });
  // console.log(userExists)
  if (userExists) {
    response.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // confirm if the user was created or not
  if (user) {
    response.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    response.status(400);
    throw new Error("Invalid user data");
  }

  // console.log(hashedPassword)
  // console.log(name, email, password)
  // response.json({message : "Register User"})
});

// %desc Authenticate a user
// route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    response.status(400);
    throw new Error("Please add all fields");
  }

  // Check for user email
  const user = await User.findOne({ email });

  const dbPassword = await bcrypt.compare(password, user.password);

  if (user && dbPassword) {
    response.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    response.status(400);
    throw new Error("Invalid credentials");
  }
  // response.json({message : "Login User"})
});

// %desc Get user data
// route GET /api/users/me
// @access Private
const getMe = asyncHandler(async (request, response) => {
  response.status(200).json(request.user);
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
