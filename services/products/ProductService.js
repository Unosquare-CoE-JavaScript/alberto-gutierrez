const Product = require("../../db/models/product");

class ProductService {
  async create(productData) {
    const product = new Product({ ...productData });
    const result = (await product.save()).toObject();
    return result;
  }
}

module.exports = new ProductService();
