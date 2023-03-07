const { Router } = require("express");
const router = Router();
const{getProveedor, crearProveedor, editProveedor, deleteProveedor} = require("../controllers/proveedor");

router.get("/", getProveedor);
router.post("/new",crearProveedor);
router.post("/edit/:id",editProveedor);
router.post("/delete/:id",deleteProveedor);

module.exports = router;