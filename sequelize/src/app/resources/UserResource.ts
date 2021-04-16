import { BaseResource } from "./BaseResource";
import { UserModel } from "./../models/Users";
const bcrypt = require("bcrypt");
export class UserResource extends BaseResource {
  protected resource!: iUser;
  model = UserModel;
  constructor(public id: number | null = null) {
    super();
    this.resource.id = id;
  }
  async getFromDB(id: number | null = null) {
    if (id) {
      this.resource.id = id;
    }
    return this.load(id || (this.resource.id as number));
  }
  set username(value: string) {
    this.resource.userName = value.toLowerCase();
  }

  set password(value: string) {
    const salt = bcrypt.genSaltSync(12);
    this.resource.password = bcrypt.hashSync(value, salt);
  }
  get username() {
    return this.resource.userName;
  }
  bulk(data: iUser) {
    console.log(data);
    this.username = data.userName;
    this.resource.password = data.password;
    return this.resource;
  }
}

export interface iUser {
  id?: number | null;
  userName: string;
  password: string;
}
