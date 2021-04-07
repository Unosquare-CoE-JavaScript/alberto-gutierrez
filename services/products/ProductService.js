const Product = require("../../db/models/product");

class ProductService {
  async create(productData) {
    const product = new Product({ ...productData });
    return await product.save();
  }
}

module.exports = new ProductService();
