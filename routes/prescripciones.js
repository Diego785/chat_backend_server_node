const { Router } = require("express");
const router = Router();
const { getPrescripcion, crearReceta } = require("../controllers/prescripcion");

router.get("/get-Prescripcion/:receta", getPrescripcion );
router.post("/new", crearReceta);

module.exports = router;