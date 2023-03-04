const { Schema, model } = require('mongoose');

const CuerpoSchema = Schema({

    notificacion:{
        type: Schema.Types.ObjectId,
        ref: 'Notificacion',
        required: true
    },  
    lote:{
        type: Schema.Types.ObjectId,
        ref: 'Lote',
        required: true
    },
    fecha: {
        type: Date,
        required: true,
    },

});

module.exports = model('Cuerpo', CuerpoSchema);