/*

    path: api/productos

*/

const { Router } = require("express");
const router = Router();
const { crearProducto, getProduct, getEspecificProducts, getProductoforId  } = require("../controllers/producto");

router.post("/new", crearProducto);
router.get("/", getProduct);
router.get("/specific-products", getEspecificProducts );
router.get("/unique-product/:codigo", getProductoforId  );

module.exports = router;
