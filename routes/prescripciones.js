const { Router } = require("express");
const router = Router();
const { getPrescripcion } = require("../controllers/prescripcion");

router.get("/get-Prescripcion/:receta", getPrescripcion );

module.exports = router;