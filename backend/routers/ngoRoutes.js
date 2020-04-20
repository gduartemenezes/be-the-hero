const express = require("express");

const ngoController = require("../controllers/ngoController");

const router = express.Router();

router.route("/").post(ngoController.createNGO);

module.exports = router;
