/*
path: api/usuarios
*/ 

const { Router } = require('express');
const { getUsers, getUsuarioPaciente } = require('../controllers/usuarios');

const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// validarJWT,
router.get('/', validarJWT, getUsers);
router.get('/rolPaciente', getUsuarioPaciente);

module.exports = router;