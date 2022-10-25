const router = require("express").Router();

const { createPin, getPins } = require("../controlers/pinControlers");

router.route("/").post(createPin).get(getPins);

module.exports = router;
