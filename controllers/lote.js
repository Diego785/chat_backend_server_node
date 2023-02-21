const { response } = require("express");
const Lote = require("../models/lote");

const getLote = async (req, res = response) => {
  const myLote = await Lote.find();

  res.json({
    ok: true,
    myLote,
  });
};


module.exports = { getLote };