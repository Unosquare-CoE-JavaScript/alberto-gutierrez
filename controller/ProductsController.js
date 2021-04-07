const ProductService = require("../services/products/ProductService");

class ProductController {
  async create(req, res, next) {
    const service = ProductService;
    const response = {};
    try {
      const product = await service.create(req.body);
      response.status = 200; //redundante
      response.message = `Success`;
      response.content = product;
    } catch (e) {
      response.status = 500; //redundante
      response.message = e.message;
      response.content = req.body;
    }

    res.status(response.status).json(response);
  }
  get() {}
  show() {}
  delete() {}
}
module.exports = new ProductController();
