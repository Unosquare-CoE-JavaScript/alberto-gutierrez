"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const BaseModel_1 = require("./BaseModel");
class User extends BaseModel_1.BaseModel {
    constructor() {
        super();
        this.tableName = "users";
        this.attributes = {
            userName: { type: sequelize_1.DataTypes.STRING },
            password: { type: sequelize_1.DataTypes.STRING },
        };
    }
}
exports.User = User;
//# sourceMappingURL=Users.js.map