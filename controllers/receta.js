const { response } = require("express");
const Receta = require("../models/receta");

const getReceta = async (req, res = response) => {
  const myReceta = await Receta.find().populate("cliente", {nombre: 1}).sort({fecha: 'desc'});

  res.json({
    ok: true,
    myReceta,
  });
};

module.exports = { getReceta };
