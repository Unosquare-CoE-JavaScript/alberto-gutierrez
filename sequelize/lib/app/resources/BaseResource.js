"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = exports.BaseResource = void 0;
class BaseResource {
    constructor() {
        this.resource = {};
    }
    async load(id) {
        const user = await this.model.findByPk(id);
        this.resource = user.dataValues;
        return this;
    }
    save() {
        const id = this.resource.id;
        return id ? this.update(id, this.resource) : this.create(this.resource);
    }
    get() {
        return this.resource;
    }
    killMe() {
        if (!this.resource.id) {
            throw new Error("I dont know who i am");
        }
        this.model.destroy({ where: { id: this.resource.id } });
    }
    bulk(data) {
        this.resource = data;
        return this;
    }
    update(id, data) {
        this.model.update(data, { where: { id } });
    }
    async create(data) {
        return (this.resource = (await this.model.create(data)).dataValues);
    }
}
exports.BaseResource = BaseResource;
class Collection extends Array {
    constructor(resource) {
        super();
        this.resource = resource;
    }
    push(content) {
        const res = new this.resource();
        return super.push(res.bulk(content));
    }
}
exports.Collection = Collection;
//# sourceMappingURL=BaseResource.js.map