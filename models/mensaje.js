const { Schema, model } = require('mongoose');

const MensajeSchema = Schema({

    de:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    
    para:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    online:{
        type: Boolean,
        default: false
    },
    mensaje: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

MensajeSchema.method('toJSON', function (){
    const { __v, _id,  ...object } = this.toObject();
    return object;
})

module.exports = model('Mensaje', MensajeSchema);