const { verify } = require("jsonwebtoken");
const { constants } = require("../constants");
const { STDResource } = require("../resources/STD/STDResource");

module.exports.validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  let response = {};
  if (!authorization) {
    throw new Error(constants.httpResponse[401]);
  }
  try {
    const [, token] = authorization.split("Bearer ");
    console.log(token);
    const decode = verify(token, "secret key");
    console.log(decode);
    return next();
  } catch (e) {
    response = new STDResource().onFail(e, 401);
  }
  res.status(response.status).send(response);
};
