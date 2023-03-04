/*

    path: api/productos

*/

const { Router } = require("express");
const router = Router();
const { crearProducto, getProduct, getEspecificProducts, getAvailableProducts, getExpiratedProducts, getCategories, getProductoforId, getProductsByCategory, getQuantityOfProductsByCategory, editProduct } = require("../controllers/producto");

router.post("/new", crearProducto);
router.post("/edit/:id", editProduct);
router.get("/", getProduct);
router.get("/specific-products", getEspecificProducts );
router.get("/available-products", getAvailableProducts );
router.get("/expirated-products", getExpiratedProducts );
router.get("/categories", getCategories );
router.get("/unique-product/:codigo", getProductoforId  );
router.get("/by-category/:category", getProductsByCategory  );
router.get("/quantity-category/:category", getQuantityOfProductsByCategory  );

module.exports = router;
