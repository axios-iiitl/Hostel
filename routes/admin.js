const express = require("express");
const bodyParser = require("body-parser");

const moment = require("moment");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));





module.exports = router;
