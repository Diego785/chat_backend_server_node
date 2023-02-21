const { Schema, model} = require('mongoose');

const PacienteSchema = Schema({

    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

    fechaNacimiento: {
        type: Date,
        required: true,
    },

});

module.exports = model('Paciente', PacienteSchema);