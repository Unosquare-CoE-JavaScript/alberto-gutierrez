const Joi = require("@hapi/joi");
class ProductSchema {
  create = Joi.object().keys({
    name: Joi.string().required(),
    brand: Joi.string().required(),
    price: Joi.number().max(1000000).min(1).required(),
  });
}
module.exports = { ProductSchema };
