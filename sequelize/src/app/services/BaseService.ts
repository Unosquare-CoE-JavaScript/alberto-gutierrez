import { Newable } from "../../utils/types";
import { Collection } from "../resources/BaseResource";
import { BaseResource } from "./../resources/BaseResource";
import { BaseModel } from "./../models/BaseModel";

export class BaseService {
  model!: BaseModel;
  resource!: Newable<BaseResource>;
  async get() {
    const collect: Collection<BaseResource> = new Collection(this.resource);
    const values = await this.model.db.findAll();
    values.forEach((val) => {
      collect.push(val.get());
    });
    return collect;
  }
  show(id: string | number) {
    return this.model.db.findByPk(id);
  }
  create(data: { [key: string]: any }) {
    return this.model.db.create(data);
  }
}
