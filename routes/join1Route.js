const express = require("express");
const { join1Qeury } = require("../services/joinsServices");

const router = express.Router();

router.route("/").get(join1Qeury);

module.exports = router;
