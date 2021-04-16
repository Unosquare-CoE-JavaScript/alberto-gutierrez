import { ModelCtor } from "sequelize/types";
import { alphanumeric, dictionary, Newable } from "../../utils/types";
export class BaseResource {
  protected resource: { [key: string]: any } = {};
  public model!: ModelCtor<any>;
  async load(id: alphanumeric) {
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
  bulk(data: { [key: string]: any }) {
    this.resource = data;
    return this.resource;
  }
  private update(id: alphanumeric, data: dictionary) {
    this.model.update(data, { where: { id } });
  }
  private async create(data: dictionary) {
    return (this.resource = (await this.model.create(data)).dataValues);
  }
}
export class Collection extends Array {
  constructor(public resource: Newable<BaseResource>) {
    super();
  }
  push(content: dictionary) {
    const res = new this.resource();
    return super.push(res.bulk(content));
  }
}
