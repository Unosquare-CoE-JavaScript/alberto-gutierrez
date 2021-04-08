const Joi = require("@hapi/joi");
const { STDResource } = require("../resources/STD/STDResource");
function validateObjectSchema(data, schema) {
  const result = Joi.validate(data, schema);
  return result.error?.details.map((values) => ({
    error: values.message,
    path: values.path,
  }));
}
module.exports.validateBody = (schema) => {
  return (req, res, next) => {
    const error = validateObjectSchema(req.body, schema);
    if (error) {
      const response = new STDResource().onFail(error, 400);
      return res.status(response.status).send(response);
    }
    return next();
  };
};
