const { Schema, model } = require('mongoose');

const PrescripcionSchema = Schema({

    receta:{
        type: Schema.Types.ObjectId,
        ref: 'Receta',
        required: true
    },  
    
    producto:{
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    },
    dosis:{
        type: Number,
        required: true,
    },
    instruccion: {
        type: String,
        required: true,
    },

});

module.exports = model('Prescripcion', PrescripcionSchema);