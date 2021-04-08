const { constants } = require("../../constants");
const Product = require("../../db/models/product");
const User = require("../../db/models/user");
const bcrypt = require("bcrypt");
const { mongoDataFormatter, checkById } = require("../../helpers/dbHelpers");

class UserService {
  async create({ email, password }) {
    const exists = await User.findOne({ email });
    if (exists) {
      throw new Error(constants.userMsg.EXISTING_USER);
    }
    const model = new User({
      email,
      password: await bcrypt.hash(password, 12),
    });
    const result = await model.save();
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

module.exports = new UserService();
