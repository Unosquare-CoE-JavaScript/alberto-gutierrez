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
  async get(req, res) {
    const service = ProductService;
    let response = {};
    let resource = new STDResource();
    try {
      const product = await service.get(req.query);
      response = resource.onSuccess(product);
    } catch (e) {
      response = resource.onFail(e);
    }

    res.status(response.status).json(response);
  }
  async show(req, res) {
    const service = ProductService;
    let response = {};
    let resource = new STDResource();
    try {
      const product = await service.show(req.params.id);
      response = resource.onSuccess(product);
    } catch (e) {
      response = resource.onFail(e);
    }

    res.status(response.status).json(response);
  }
  async delete() {}
  async update(req, res) {
    const service = ProductService;
    let response = {};
    let resource = new STDResource();
    try {
      const product = await service.update(req.params.id, req.body);
      response = resource.onSuccess(product);
    } catch (e) {
      response = resource.onFail(e);
    }

    res.status(response.status).json(response);
  }

  async delete(req, res) {
    const service = ProductService;
    let response = {};
    let resource = new STDResource();
    try {
      const product = await service.delete(req.params.id);
      response = resource.onSuccess(product);
    } catch (e) {
      response = resource.onFail(e);
    }

    res.status(response.status).json(response);
  }
}
module.exports = new ProductController();
