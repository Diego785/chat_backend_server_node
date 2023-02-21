const { Router } = require("express");
const router = Router();
const {getFarmacia} = require("../controllers/farmacia");

router.get("/", getFarmacia);

module.exports = router;