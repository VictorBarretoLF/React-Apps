const asyncHandler = require("express-async-handler");

const Pin = require("../model/pinModel");

// %desc Create a Pin
// route POST
// @access
const createPin = asyncHandler(async (request, response) => {
  console.log('batendo aqui');

  response.status(200).json(request.body);
});

module.exports = {
  createPin,
};
