const { Schema, model} = require('mongoose');

const ProveedorSchema = Schema({

    nombre: {
        type: String,
        required: true,
    },

    direccion: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }

});

module.exports = model('Proveedor', ProveedorSchema);

