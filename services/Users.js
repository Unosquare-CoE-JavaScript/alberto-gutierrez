const request = require("request");

module.exports = {
  getUsers: (callback) => {
    request.get("https://someurl.com/api/v1/users", (err, res) => {
      callback?.(JSON.parse(res.body));
    });
  },
};
