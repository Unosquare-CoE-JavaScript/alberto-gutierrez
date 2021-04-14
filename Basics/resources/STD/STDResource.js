const { constants } = require("../../constants");

class STDResource {
  onSuccess(content, response = 200, message = "success") {
    if (!content) {
      response = 404;
    }
    return {
      status: response,
      message: constants.httpResponse[response],
      content,
    };
  }
  onFail(e, status = 400) {
    return {
      status,
      message: e.message,
      content: {},
    };
  }
}
module.exports = { STDResource };
