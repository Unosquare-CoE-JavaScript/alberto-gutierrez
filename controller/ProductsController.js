class ProductController {
  create(req, res, next) {
    res.json(req.body);
  }
  get() {}
  show() {}
  delete() {}
}
module.exports = new ProductController();
