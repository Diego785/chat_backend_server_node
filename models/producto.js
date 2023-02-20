const { Schema, model} = require('mongoose');

const ProductoSchema = Schema({

    nombre: {
        type: String,
        required: true,
    },

    fechaCreacion: {
        type: Date,
        required: false,
    },

    fechaVencimiento: {
        type: Date,
        required: true,
    },

    foto: {
        type: String,
    },

});

module.exports = model('Producto', ProductoSchema);