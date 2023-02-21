const { Schema, model} = require('mongoose');

const NotificacionSchema = Schema({

    contenido: {
        type: String,
        required: true,
    }
    
});

module.exports = model('Notificacion', NotificacionSchema);