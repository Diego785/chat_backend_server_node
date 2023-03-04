const { response } = require("express");
const Receta = require("../models/receta");

const getReceta = async (req, res = response) => {
  const myReceta = await Receta.find().populate({
    path: "cliente", 
    select: {
      "usuario":1
    }, 
    populate: {
      path: "usuario", 
      select: {
        "nombre":1, 
        "apellido":1,
        "direccion":1,
        "telefono":1
      }
    }}).sort({fecha: 'desc'});
  res.json({
    ok: true,
    myReceta,
  });
};

module.exports = { getReceta };
