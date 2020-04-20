const express = require("express");

const ongController = require("../controllers/ongController");

const router = express.Router();

router.route("/").get();
