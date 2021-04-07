const express = require("express");
const ProductController = require("../controller/ProductsController");
const router = express.Router();
console.log(ProductController);
router.post("/", ProductController.create);
module.exports = router;
