const { ObjectId } = require('mongodb');
const { response } = require("express");
const Producto = require("../models/producto");
const Categoria = require("../models/categoria");
const Paciente = require("../models/paciente");
const User = require("../models/usuario");
const { populate } = require('../models/producto');
const Lote = require('../models/lote');
const { Model } = require('mongoose');

const crearProducto = async (req, res = response) => {
  const producto = new Producto(req.body);

  await producto.save();

  res.json({
    ok: true,
    body: req.body,
  });
};

const editProduct = async (req, res = response) => {
  const id = req.params.id;
  let producto = await Producto.findOneAndUpdate({ _id: id }, { nombre: req.body.nombre, descripcion: req.body.descripcion });

  console.log(producto);


  res.json({
    ok: true,
    body: req.body,
  });
};

const getProduct = async (req, res = response) => {
  // const patient = await Paciente.find().populate({ 
  //     path: 'usuario', 
  //     select: 'email', 
  //     populate:{  
  //       path: 'rol',
  //       select: 'nombre'
  //     } 
  //   });
  const myProducts = await Producto.find().populate({
    path: 'categoria',
    select: ['nombre']
  });

  res.json({
    ok: true,
    myProducts,
  });
};

const getEspecificProducts = async (req, res = response) => {
  // const d = new Date();
  // const d2 = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  // const d3 = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7);
  // const myProducts = await Producto.find({ "fechaVencimiento": { $gte: d2, $lte: d3 } }).select("nombre , fechaVencimiento").limit(30);
  // res.json({
  //   ok: true,
  //   myProducts
  // });
};

const getAvailableProducts = async (req, res = response) => {

  const d = new Date();
  const d2 = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const lotes = await Lote.find({ "fechaVencimiento": { $gte: d2 } }).populate({
    path: 'producto', populate: {
      path: 'categoria',
      select: 'nombre'
    }
  });

  let myProducts = [];
  let b;
  lotes.forEach(function (arrayItem) {
    // console.log(arrayItem.producto);
    b = true;
    for (let index = 0; index < myProducts.length; index++) {
      if (myProducts[index]._id == arrayItem.producto._id) {
        b = false;
      }
    }
    if (b == true)
      myProducts.push(arrayItem.producto);
  });


  res.json({
    ok: true,
    myProducts,
  });
};

const getExpiratedProducts = async (req, res = response) => {
  const d = new Date();
  const d2 = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const lotes = await Lote.find({ "fechaVencimiento": { $lte: d2 } }).populate({
    path: 'producto', populate: {
      path: 'categoria',
      select: 'nombre'
    }
  });

  let myProducts = [];
  lotes.forEach(function (arrayItem) {
    // console.log(arrayItem.producto);
    myProducts.push(arrayItem.producto);
  });


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

const getProductoforId = async (req, res) => {
  const productoId = req.params.codigo;
  const producto = await Producto.findOne({ _id: ObjectId(productoId) });
  res.json({
    ok: true,
    producto: producto
  });
}

const getProductsByCategory = async (req, res) => {
  const categoryId = req.params.category;
  const productos = await Producto.find({ categoria: categoryId }).populate({ path: 'categoria' });
  res.json({
    ok: false,
    myProducts: productos
  });
}

const getQuantityOfProductsByCategory = async (req, res) => {
  const categoryId = req.params.category;
  const productos = await Producto.find({ categoria: categoryId }).populate({ path: 'categoria' });
  res.json({
    ok: false,
    cantidad: productos.length
  });
}

module.exports = { crearProducto, editProduct, getProduct, getEspecificProducts, getAvailableProducts, getExpiratedProducts, getCategories, getProductoforId, getProductsByCategory, getQuantityOfProductsByCategory };
