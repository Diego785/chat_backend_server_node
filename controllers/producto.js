const { ObjectId } = require('mongodb');
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
  const d = new Date();
  const d2 = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const d3 = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7);
  const myProducts = await Producto.find({"fechaVencimiento":{$gte: d2, $lte: d3}}).select("nombre , fechaVencimiento").limit(30);
  res.json({
    ok: true,
    myProducts
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

const getProductoforId = async(req,res) => {
  const productoId = req.params.codigo;
  const producto = await Producto.findOne({_id : ObjectId(productoId)});
  res.json({
      ok: true,
      producto: producto
  });
}

module.exports = { crearProducto, getProduct, getEspecificProducts, getAvailableProducts, getExpiratedProducts, getCategories, getProductoforId };
