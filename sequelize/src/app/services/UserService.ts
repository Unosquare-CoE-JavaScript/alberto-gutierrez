import { Newable } from "../../utils/types";
import { UserModel } from "../models/users";
import { iUser, UserResource } from "../resources/UserResource";
import { BaseService } from "./BaseService";
import { BaseResource } from "./../resources/BaseResource";

export class UserService extends BaseService {
  model = UserModel;
  resource: Newable<BaseResource> = UserResource;
  constructor() {
    super();
  }
  create(userData: iUser) {
    return super.create(userData);
  }
}
