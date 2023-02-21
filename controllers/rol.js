const { response } = require("express");
const Rol = require("../models/rol");

const getRol = async (req, res = response) => {
  const myRols = await Rol.find();

  res.json({
    ok: true,
    myRols,
  });
};


module.exports = { getRol };
