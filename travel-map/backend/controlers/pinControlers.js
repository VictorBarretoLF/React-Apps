const asyncHandler = require("express-async-handler");

const Pin = require("../model/pinModel");

// %desc Create a Pin
// route POST /api/pin
// @access
const createPin = asyncHandler(async (request, response) => {
  const { username, title, desc, rating, long, lat } = request.body;

  if (!username || !title || !desc || !rating || !long || !lat) {
    response.status(400);
    throw new Error("Please add all fields!");
  }

  const pin = await Pin.create(request.body);

  if (pin) {
    return response.status(201).json(pin);
  }

  response.status(400);
  throw new Error("Invalid data");
});

// %desc Get all Pins
// route GET /api/pin
// @access
const getPins = asyncHandler(async (request, response) => {
  const pins = await Pin.find();

  response.status(200).json(pins);
});

module.exports = {
  createPin,
  getPins,
};
