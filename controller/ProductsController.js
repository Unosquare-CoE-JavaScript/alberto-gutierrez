const { STDResource } = require("../resources/STD/STDResource");
const ProductService = require("../services/products/ProductService");

class ProductController {
  async create(req, res, next) {
    const service = ProductService;
    let response = {};
    let resource = new STDResource();
    try {
      const product = await service.create(req.body);
      response = resource.onSuccess(product);
    } catch (e) {
      response = resource.onFail(e);
    }

    res.status(response.status).json(response);
  }
  async get(req, res, next) {
    const service = ProductService;
    let response = {};
    let resource = new STDResource();
    try {
      const product = await service.create(req.body);
      response = resource.onSuccess(product);
    } catch (e) {
      response = resource.onFail(e);
    }

    res.status(response.status).json(response);
  }
  show() {}
  delete() {}
}
module.exports = new ProductController();
