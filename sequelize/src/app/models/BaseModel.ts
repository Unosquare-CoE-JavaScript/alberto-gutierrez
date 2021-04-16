import { db } from "./../../db/connections";
export class BaseModel {
  tableName: string = "";
  attributes = {};
  constructor() {
    console.log(this);
  }
  trigger() {
    const model = db.define(this.tableName, this.attributes);
    return model;
  }
}
