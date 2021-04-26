"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const BaseResource_1 = require("../resources/BaseResource");
class BaseService {
    async get() {
        const collect = new BaseResource_1.Collection(this.resource);
        const values = await this.model.db.findAll();
        values.forEach((val) => {
            collect.push(val.get());
        });
        return collect;
    }
    show(id) {
        return this.model.db.findByPk(id);
    }
    create(data) {
        return this.model.db.create(data);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=BaseService.js.map