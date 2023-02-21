const { Router } = require("express");
const router = Router();
const {getPaciente} = require("../controllers/paciente");

router.get("/", getPaciente);

module.exports = router;