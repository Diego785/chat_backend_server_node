const { response } = require("express");
const Notificacion = require("../models/notificacion");

const getNotificacion = async (req, res = response) => {
  const myNotificacions = await Notificacion.find();

  res.json({
    ok: true,
    myNotificacions,
  });
};

const crearNotificacion = async (req, res = response) => {
  try {
      const d = new Date();
      const notificacion = new Notificacion({
        contenido: req.body.salida,
        fecha: d
      });
      await notificacion.save();
      // console.log("Se ingresó con éxito");
  } catch(e) {
    // console.log(e);
  }
};


module.exports = { getNotificacion, crearNotificacion };
