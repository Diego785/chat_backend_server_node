const { response } = require("express");
const Paciente = require("../models/paciente");
const Usuario = require("../models/usuario");

const getPaciente = async (req, res = response) => {
  const myPaciente = await Paciente.find().populate({
    path:'usuario',
    select:['nombre', 'apellido','direccion','telefono',]
  });
  
  res.json({
    ok: true,
    myPaciente,
  });
};

module.exports = { getPaciente};