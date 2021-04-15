const express = require("express");
const { ProductSchema } = require("../apiSchema/productSchema");
const ProductController = require("../controller/ProductsController");
const {
  validateBody,
  validateQueryParams,
} = require("../middleware/joiSchemaValidation");
const { validateToken } = require("../middleware/tokenValidation");

const router = express.Router();
const ps = new ProductSchema();
router.post(
  "/",
  validateToken,
  validateBody(ps.create),
  ProductController.create,
);
router.get(
  "/",
  validateToken,
  validateQueryParams(ps.get),
  ProductController.get,
);
router.get("/:id", validateToken, ProductController.show);
router.put("/:id", validateToken, ProductController.update);
router.delete("/:id", validateToken, ProductController.delete);
module.exports = router;
