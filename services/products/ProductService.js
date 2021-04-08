const Product = require("../../db/models/product");
const { mongoDataFormatter, checkById } = require("../../helpers/dbHelpers");
class ProductService {
  async create(productData) {
    const product = new Product({ ...productData });
    const result = await product.save();
    return mongoDataFormatter(result);
  }
  async get({ skip = 0, limit = 10, filters = {} }) {
    let product = await Product.find(filters)
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return mongoDataFormatter(product);
  }
  async show(id) {
    checkById(id);
    let product = await Product.findById(id);
    return mongoDataFormatter(product);
  }
  async update(id, content) {
    checkById(id);
    let product = await Product.findOneAndUpdate({ _id: id }, content, {
      new: true,
    });
    return mongoDataFormatter(product);
  }
  async delete(id, content) {
    checkById(id);
    let product = await Product.findOneAndDelete(id);
    return mongoDataFormatter(product);
  }
}

module.exports = new ProductService();
