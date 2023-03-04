const { Router } = require("express");
const router = Router();
const { crearCuerpo } = require("../controllers/cuerpo");

router.post("/new", crearCuerpo);

module.exports = router;