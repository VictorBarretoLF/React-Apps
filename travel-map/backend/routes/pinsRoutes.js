const router = require("express").Router();

const { createPin } = require("../controlers/pinControlers");

router.route("/").get(createPin);

module.exports = router