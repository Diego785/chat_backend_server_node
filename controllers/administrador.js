const { response } = require("express");
const Administrador = require("../models/administrador");

const getAdministrador = async (req, res = response) => {
  const myAdministrador = await Administrador.findOne().populate({
    path: "usuario", 
    select: {
      "nombre":1, 
      "apellido":1,
      "direccion":1,
      "telefono":1
    }
  });

  res.json({
    ok: true,
    myAdministrador,
  });
};


module.exports = { getAdministrador };