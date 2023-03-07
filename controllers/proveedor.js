const {response} = require("express");
const Proveedor = require("../models/proveedor");

const getProveedor = async(req , res = response)=>{
    const myProveedor = await Proveedor.find();
    res.json({
        ok: true,
        myProveedor,
    });
};

const crearProveedor = async (req, res = response) => {
    const proveedor = new Proveedor(req.body);
  
    await proveedor.save();
      
    res.json({
      ok: true,
      body: req.body,
    });
  };
  
  const editProveedor = async (req, res = response) => {
    const id = req.params.id;
    let proveedor = await Proveedor.findOneAndUpdate({ _id: id }, { 
      nombre: req.body.nombre,
      direccion: req.body.direccion,
      telefono:req.body.telefono,
      email:req.body.email,
       });
  
    console.log(proveedor);
  
  
    res.json({
      ok: true,
      body: req.body,
    });
  };
const deleteProveedor = async(req,res=response )=>{
  const proveedorid = req.params.id;
  const proveedor = await Proveedor.findOne({ _id: ObjectId(proveedorid) });
  await proveedor.delete();
  res.json({
    ok: true,
    body: req.body,
  });

}

module.exports = {getProveedor,crearProveedor,editProveedor,deleteProveedor};
