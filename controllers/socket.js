const Usuario = require('../models/usuario');
const Mensaje = require('../models/mensaje');

const usuarioConectado = async (uid = '') => {
    const usuario = await Usuario.findById(uid);
    usuario.online = true;
    await usuario.save();
    return usuario;
}

const usuarioDesconectado = async (uid = '') => {
    const usuario = await Usuario.findById(uid);
    usuario.online = false;
    await usuario.save();
    return usuario;
}

const saveMessage = async(payload) => {

    /*
        payload: {
            de: '',
            para: '',
            texto: ''
        }
    */

    try {
        const message = new Mensaje(payload);
        await message.save();

        return true;
    } catch (error) {
        return false;
    }

}

module.exports ={
    usuarioConectado,
    usuarioDesconectado,
    saveMessage,
}