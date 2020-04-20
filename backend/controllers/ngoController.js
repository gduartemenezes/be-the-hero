const crypto = require("crypto");
const connection = require("../database/connection");

exports.createNGO = async (req, res) => {
  try {
    const newNGO = req.body;
    newNGO.id = crypto.randomBytes(4).toString("HEX");
    await connection("ngos").insert(newNGO);

    res.status(200).json({
      status: "success",
      id: newNGO.id,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getAllNGOs = async (req, res) => {
  try {
    const allNGOs = await connection("ngos").select("*");

    res.status(200).json({
      status: "success",
      allNGOs,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
