const { ObjectId } = require('mongodb');
const { response } = require("express");
const Usuario = require('../models/usuario');

const getUsers = async (req, res = response) => {

  const desde = Number(req.query.desde) || 0;

  const usuarios = await Usuario
  .find({_id: { $ne: req.uid}})
  .sort('online')
  .skip(desde)
  .limit(20)

  res.json({
    ok: true,
    usuarios,
  });
};

const getUsuarioPaciente = async (req, res = response) => {
  const myPacientes = await Usuario.find({rol: { $ne: ObjectId("63f43da99b10d175599227e3")}}).select("nombre").select("apellido");

  res.json({
    ok: true,
    myPacientes,
  });
};

module.exports = { getUsers, getUsuarioPaciente };
