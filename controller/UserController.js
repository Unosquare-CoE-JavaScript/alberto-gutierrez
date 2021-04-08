const { STDResource } = require("../resources/STD/STDResource");
const UserService = require("../services/users/UserService");

class UserController {
  async create(req, res) {
    const service = UserService;
    let response = {};
    let resource = new STDResource();
    try {
      const user = await service.create(req.body);
      response = resource.onSuccess(user);
    } catch (e) {
      response = resource.onFail(e);
    }

    res.status(response.status).json(response);
  }
  async get() {}
  async show() {}
  async update() {}
  async delete() {}
}
module.exports = new UserController();
