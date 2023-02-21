const { Router } = require("express");
const router = Router();
const {getAdministrador} = require("../controllers/administrador");

router.get("/", getAdministrador);

module.exports = router;