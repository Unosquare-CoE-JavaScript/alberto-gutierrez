const Product = require("../../db/models/product");
const { mongoDataFormatter } = require("../../helpers/dbHelpers");
class ProductService {
  async create(productData) {
    const product = new Product({ ...productData });
    const result = await product.save();
    return mongoDataFormatter(result);
  }
  async get({ skip = 0, limit = 10, filters = {} }) {
    console.log(filters);
    let product = await Product.find(filters)
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return mongoDataFormatter(product);
  }
}

module.exports = new ProductService();
