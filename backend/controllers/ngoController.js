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
