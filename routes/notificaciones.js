const { Router } = require("express");
const router = Router();
const { getNotificacion } = require("../controllers/notificacion");

router.get("/", getNotificacion);

module.exports = router;
