const { ObjectId } = require('mongodb');
const Receta = require("../models/receta");
const Prescripcion = require("../models/prescripcion");
const Paciente = require('../models/paciente');

const getPrescripcion = async(req,res) => {
    const recetaId = req.params.receta;
    const prescripcion = await Prescripcion.find({receta : ObjectId(recetaId)}).populate("producto", {nombre: 1});
    res.json({
        ok: true,
        prescripcion: prescripcion
    });
}

const crearReceta = async (req, res = response) => {
    try {
        const d = new Date();
        const paciente = await Paciente.findOne({usuario : ObjectId(req.body.cliente)});
        const receta = new Receta({
            vendedor: ObjectId("63f4d02e4060202068681038"),
            cliente: ObjectId(paciente._id),
            fecha: d
        });
        await receta.save();
        for (var i = 0; i < req.body.producto.length; i++) {
            var prescripcion = new Prescripcion({
                receta: ObjectId(receta.id),
                producto: ObjectId(req.body.producto[i]),
                dosis: req.body.dosis[i],
                instruccion: req.body.instruccion[i],
            });
            await prescripcion.save();
        }
        res.json({
            ok: true,
            body: "Se ingresó con éxito",
        });
    } catch(e) {
        res.json({
        ok: true,
        body: e,
        });
    }
};

module.exports = { getPrescripcion, crearReceta };
