const { Schema, model } = require('mongoose');

const RecetaSchema = Schema({

    vendedor:{
        type: Schema.Types.ObjectId,
        ref: 'Administrador',
        required: true
    },  
    
    cliente:{
        type: Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    },
    fecha: {
        type: Date,
        required: true,
    },
});

module.exports = model('Receta', RecetaSchema);