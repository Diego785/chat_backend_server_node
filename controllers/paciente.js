const { response } = require("express");
const Paciente = require("../models/paciente");

const getPaciente = async (req, res = response) => {
  const myPaciente = await Paciente.find();

  res.json({
    ok: true,
    myPaciente,
  });
};


module.exports = { getPaciente };