"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResource = void 0;
const BaseResource_1 = require("./BaseResource");
const Users_1 = require("./../models/Users");
const bcrypt = require("bcrypt");
class UserResource extends BaseResource_1.BaseResource {
    constructor(id = null) {
        super();
        this.id = id;
        this.model = new Users_1.User().db;
        this.id = id;
    }
    async getFromDB(id = null) {
        if (id) {
            this.resource.id = id;
        }
        return this.load(id || this.resource.id);
    }
    set username(value) {
        this.resource.userName = value.toLowerCase();
    }
    set password(value) {
        const salt = bcrypt.genSaltSync(12);
        this.resource.password = bcrypt.hashSync(value, salt);
    }
    get username() {
        return this.resource.userName;
    }
}
exports.UserResource = UserResource;
//# sourceMappingURL=UserResource.js.map