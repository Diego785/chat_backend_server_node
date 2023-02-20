const { Schema, model } = require('mongoose');

const RecetaSchema = Schema({

    vendedor:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },  
    
    cliente:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    fecha: {
        type: Date,
        required: true,
    },
});

module.exports = model('Receta', RecetaSchema);