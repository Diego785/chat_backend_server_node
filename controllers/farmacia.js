const { response } = require("express");
const Farmacia = require("../models/farmacia");

const getFarmacia = async (req, res = response) => {
  const myFarmacia = await Farmacia.find();

  res.json({
    ok: true,
    myFarmacia,
  });
};


module.exports = { getFarmacia };