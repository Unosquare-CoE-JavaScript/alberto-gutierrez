class STDResource {
  onSuccess(content, response = 200) {
    return {
      status: response,
      message: "Succcess",
      content,
    };
  }
  onFail(e, status = 500) {
    return {
      status,
      message: e.message,
      content: {},
    };
  }
}
module.exports = { STDResource };
