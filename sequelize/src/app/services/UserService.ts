import { Newable } from "../../utils/types";
import { iUser, UserResource } from "../resources/UserResource";
import { BaseService } from "./BaseService";
import { BaseResource } from "./../resources/BaseResource";
import { User } from "./../models/Users";

export class UserService extends BaseService {
  model = new User();
  resource: Newable<BaseResource> = UserResource;
  constructor() {
    super();
  }
  create(userData: iUser) {
    return super.create(userData);
  }
}
