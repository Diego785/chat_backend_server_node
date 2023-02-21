const { Schema, model} = require('mongoose');

const ProductoSchema = Schema({

    nombre: {
        type: String,
        required: true,
    },

    foto: {
        type: String,
    },

    descripcion:{
        type: String,
    },

    categoria:{
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },


});

module.exports = model('Producto', ProductoSchema);