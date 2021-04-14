const Joi = require("@hapi/joi");
class UserSchema {
  stdSchema = {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  };
  create = Joi.object().keys(this.stdSchema);
  get = Joi.object().keys({
    skip: Joi.string(),
    limit: Joi.string(),
    search: Joi.string(),
  });
}
module.exports = { UserSchema };
