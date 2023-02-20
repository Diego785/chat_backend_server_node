const { Router } = require("express");
const router = Router();
const { getReceta } = require("../controllers/receta");

router.get("/", getReceta);

module.exports = router;
