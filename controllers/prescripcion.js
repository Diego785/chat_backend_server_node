const { ObjectId } = require('mongodb');
const Receta = require("../models/receta");
const Prescripcion = require("../models/prescripcion");

const getPrescripcion = async(req,res) => {
    const recetaId = req.params.receta;
    const prescripcion = await Prescripcion.find({receta : ObjectId(recetaId)}).populate("producto", {nombre: 1});
    // const prescripcion2 = await Prescripcion.aggregate([
    //     {
    //         $lookup:{
    //             from: 'productos',
    //             localField: 'producto',
    //             foreignField: '_id',
    //             pipeline: [
    //                 { $project: { nombre: 1 }},
    //             ],
    //             as: 'recetadetail'
    //         }
    //     }
    // ])
    res.json({
        ok: true,
        prescripcion: prescripcion
    });
}

module.exports = { getPrescripcion };
