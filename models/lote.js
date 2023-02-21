const { Schema, model} = require('mongoose');

const LoteSchema = Schema({

    fechaCreacion: {
        type: Date,
        required: false,
    },

    fechaVencimiento: {
        type: Date,
        required: true,
    },

    cantidad:{
        type: Number,
        required: true,
    },

    producto:{
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    },


});

module.exports = model('Lote', LoteSchema);