const express = require("express");
const { ProductSchema } = require("../apiSchema/productSchema");
const ProductController = require("../controller/ProductsController");
const {
  validateBody,
  validateQueryParams,
} = require("../middleware/joiSchemaValidation");

const router = express.Router();
const ps = new ProductSchema();
router.post("/", validateBody(ps.create), ProductController.create);
router.get("/", validateQueryParams(ps.get), ProductController.get);
router.get("/:id", ProductController.show);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);
module.exports = router;
