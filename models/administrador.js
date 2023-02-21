const { Schema, model} = require('mongoose');

const AdministradorSchema = Schema({

    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

    especialidad: {
        type: String,
        required: true,
    },

});

module.exports = model('Administrador', AdministradorSchema);