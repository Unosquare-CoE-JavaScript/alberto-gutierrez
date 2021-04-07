const Product = require("../../db/models/product");

class ProductService {
  async create(productData) {
    const product = new Product();
    product.save();
  }
}
