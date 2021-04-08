const express = require("express");
const { ProductSchema } = require("../apiSchema/productSchema");
const ProductController = require("../controller/ProductsController");
const { validateBody } = require("../middleware/joiSchemaValidation");
const router = express.Router();
console.log(ProductController);
router.post(
  "/",
  validateBody(new ProductSchema().create),
  ProductController.create,
);
module.exports = router;
