// const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const protect = asyncHandler(async (request, response, next) => {
  let token;
    next();
  //   console.log(request.cookies);
  // if (request.cookies.access_token) {
  //   next();
  // }

  // if (!token) {
  //   response.status(401);
  //   throw new Error("Not authenticated, no token!");
  // }
});

module.exports = {
  protect,
};
