const { response } = require("express");
const Producto = require("../models/producto");
const Categoria = require("../models/categoria");

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
  const myProducts = await Producto.find().select("nombre , fechaVencimiento").sort("fechaVencimiento").limit(30);
  res.json({
    ok: true,
    myProducts,
  });
};

const getAvailableProducts = async (req, res = response) => {
  const myProducts = await Producto.find().sort("fechaVencimiento").limit(2);

  res.json({
    ok: true,
    myProducts,
  });
};

const getExpiratedProducts = async (req, res = response) => {
  const myProducts = await Producto.find().sort("fechaVencimiento").limit(1);

  res.json({
    ok: true,
    myProducts,
  });
};

const getCategories = async (req, res = response) => {
  const categories = await Categoria.find();

  res.json({
    ok: true,
    categories,
  });
};

module.exports = { crearProducto, getProduct, getEspecificProducts, getAvailableProducts, getExpiratedProducts, getCategories };
