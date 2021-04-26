"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const UserResource_1 = require("../resources/UserResource");
const BaseService_1 = require("./BaseService");
const Users_1 = require("./../models/Users");
class UserService extends BaseService_1.BaseService {
    constructor() {
        super();
        this.model = new Users_1.User();
        this.resource = UserResource_1.UserResource;
    }
    create(userData) {
        return super.create(userData);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map