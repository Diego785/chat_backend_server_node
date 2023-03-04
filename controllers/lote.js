const { response } = require("express");
const Lote = require("../models/lote");

const getLote = async (req, res = response) => {
  // const date = await Lote.find().select('fechaVencimiento').limit(1);
  const lote = await Lote.find().populate({
    path: 'producto',
    select: ['nombre', 'descripcion', 'foto'],
    populate: {
      path: 'categoria',
      select: 'nombre'
    }
  }).sort({ fechaVencimiento: 1 });

  res.json({
    ok: true,
    lote,
  });
};


module.exports = { getLote };