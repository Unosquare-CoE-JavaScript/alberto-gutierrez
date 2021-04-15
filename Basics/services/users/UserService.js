const jwt = require("jsonwebtoken");
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
  async login({ email, password }) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error(constants.userMsg.INVALID_USER);
    }
    const validUser = await bcrypt.compare(password, user.password);
    if (!validUser) {
      throw new Error(constants.userMsg.INVALID_USER);
    }
    const token = jwt.sign({ id: user._id }, "secret key", { expiresIn: "1d" });
    return { token };
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
