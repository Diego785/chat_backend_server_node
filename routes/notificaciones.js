const { Router } = require("express");
const router = Router();
const { getNotificacion, crearNotificacion } = require("../controllers/notificacion");

router.get("/", getNotificacion);
router.post("/new", crearNotificacion);

module.exports = router;
