const { ObjectId } = require('mongodb');
const Cuerpo = require("../models/cuerpo");
const Notificacion = require("../models/notificacion");
const Lote = require('../models/lote');

const crearCuerpo = async (req, res = response) => {
    try {
        const d = new Date();
        // const paciente = await Paciente.findOne({usuario : ObjectId(req.body.cliente)});
        const notificacion = new Notificacion({
            contenido: req.body.contenido
        });
        await notificacion.save();
        for (var i = 0; i < req.body.lotes.length; i++) {
            var cuerpo = new Cuerpo({
                notificacion: ObjectId(notificacion.id),
                lote: ObjectId(req.body.lotes[i]._id),
                fecha: d
            });
            await cuerpo.save();
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
    // console.log(req.body);
};

module.exports = { crearCuerpo };
