const { response } = require("express");
const Producto = require("../models/producto");

const crearProducto = async (req, res = response) => {
  const producto = new Producto(req.body);

  await producto.save();

  res.json({
    ok: true,
    body: req.body,
  });
};

const getProduct = async (req, res = response) => {
  const myProducts = await Producto.find().sort("fechaVencimiento");

  res.json({
    ok: true,
    myProducts,
  });
};

const getEspecificProducts = async (req, res = response) => {
  const d = new Date();
  const d2 = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const d3 = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7);
  const myProducts = await Producto.find({"fechaVencimiento":{$gte: d2, $lte: d3}}).select("nombre , fechaVencimiento").limit(30);
  res.json({
    ok: true,
    myProducts
  });
};

module.exports = { crearProducto, getProduct, getEspecificProducts };
