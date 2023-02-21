const { Schema, model} = require('mongoose');

const FarmaciaSchema = Schema({

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
    }

});

module.exports = model('Farmacia', FarmaciaSchema);