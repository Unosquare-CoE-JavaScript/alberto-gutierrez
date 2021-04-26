"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const connections_1 = require("./../../db/connections");
class BaseModel {
    constructor() {
        this.tableName = "";
        this.attributes = {};
        //console.log(this);
    }
    get db() {
        const model = connections_1.db.define(this.tableName, this.attributes);
        return model;
    }
}
exports.BaseModel = BaseModel;
//# sourceMappingURL=BaseModel.js.map