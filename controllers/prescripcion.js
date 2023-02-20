const { ObjectId } = require('mongodb');
const Receta = require("../models/receta");
const Prescripcion = require("../models/prescripcion");

const getPrescripcion = async(req,res) => {
    const recetaId = req.params.receta;
    const prescripcion = await Prescripcion.find({receta : ObjectId(recetaId)}).populate("producto", {nombre: 1});
    res.json({
        ok: true,
        prescripcion: prescripcion
    });
}

module.exports = { getPrescripcion };
