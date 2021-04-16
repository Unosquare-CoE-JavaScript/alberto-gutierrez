import { ModelCtor } from "sequelize/types";
import { Newable } from "../../utils/types";
import { Collection } from "../resources/BaseResource";
import { BaseResource } from "./../resources/BaseResource";

export class BaseService {
  model!: ModelCtor<any>;
  resource!: Newable<BaseResource>;
  async get() {
    const collect = new Collection(this.resource);
    const values = await this.model.findAll();
    values.forEach((val) => {
      collect.push(values);
    });
    return collect;
  }
  show(id: string | number) {
    return this.model.findByPk(id);
  }
  create(data: { [key: string]: any }) {
    return this.model.create(data);
  }
}
