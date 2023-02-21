const { response } = require("express");
const Notificacion = require("../models/notificacion");

const getNotificacion = async (req, res = response) => {
  const myNotificacions = await Notificacion.find();

  res.json({
    ok: true,
    myNotificacions,
  });
};


module.exports = { getNotificacion };
