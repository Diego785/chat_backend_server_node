/*
    Path: /api/mensajes
*/

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

const { getChat } = require('../controllers/mensajes');

const router = Router();

// validarJWT,
router.get('/:de', validarJWT, getChat );

module.exports = router;
