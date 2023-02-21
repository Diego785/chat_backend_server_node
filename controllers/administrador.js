const { response } = require("express");
const Administrador = require("../models/administrador");

const getAdministrador = async (req, res = response) => {
  const myAdministrador = await Administrador.find();

  res.json({
    ok: true,
    myAdministrador,
  });
};


module.exports = { getAdministrador };