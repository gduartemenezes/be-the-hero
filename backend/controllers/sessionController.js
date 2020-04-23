const connection = require("../database/connection");

exports.startSession = async (req, res) => {
  try {
    const { id } = req.body;

    const ngo = await connection("ngos").where("id", id).select("name").first();

    if (!ngo) {
      return res.status(400).json({
        status: "fail",
        message: "Your ID doesn't mach with none of the Registered IDs",
      });
    }

    res.status(200).json({
      status: "success",
      ngo,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
