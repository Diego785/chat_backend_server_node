/*
path: api/usuarios
*/ 

const { Router } = require('express');
const { getUsers } = require('../controllers/usuarios');

const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// validarJWT,
router.get('/', validarJWT, getUsers);

module.exports = router;