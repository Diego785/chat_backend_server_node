const { Router } = require("express");
const router = Router();
const {getLote} = require("../controllers/lote");

router.get("/", getLote);

module.exports = router;