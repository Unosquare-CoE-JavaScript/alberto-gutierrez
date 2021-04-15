const Joi = require("@hapi/joi");
class ProductSchema {
  stdSchema = {
    name: Joi.string().required(),
    brand: Joi.string().required(),
    price: Joi.number().max(1000000).min(1).required(),
  };
  create = Joi.object().keys(this.stdSchema);
  get = Joi.object().keys({
    skip: Joi.string(),
    limit: Joi.string(),
    search: Joi.string(),
  });
  put = Joi.object().keys({
    name: Joi.string(),
    brand: Joi.string(),
    price: Joi.number().max(1000000).min(1),
  });
}
module.exports = { ProductSchema };
