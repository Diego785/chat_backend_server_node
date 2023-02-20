/*

    path: api/productos

*/

const { Router } = require("express");
const router = Router();
const { crearProducto, getProduct, getEspecificProducts, getAvailableProducts, getExpiratedProducts, getCategories } = require("../controllers/producto");

router.post("/new", crearProducto);
router.get("/", getProduct);
router.get("/specific-products", getEspecificProducts );
router.get("/available-products", getAvailableProducts );
router.get("/expirated-products", getExpiratedProducts );
router.get("/categories", getCategories );

module.exports = router;
