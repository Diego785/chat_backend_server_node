/*

    path: api/productos

*/

const { Router } = require("express");
const router = Router();
const { crearProducto, getProduct, getEspecificProducts } = require("../controllers/producto");

router.post("/new", crearProducto);
router.get("/", getProduct);
router.get("/specific-products", getEspecificProducts );

module.exports = router;
