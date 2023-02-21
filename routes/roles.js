/*

    path: api/roles

*/

const { Router } = require("express");
const router = Router();
const {getRol} = require("../controllers/rol");

router.get("/", getRol);

module.exports = router;
