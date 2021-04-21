import { iUser, UserResource } from "../resources/UserResource";
import { BaseService } from "./BaseService";
import { User } from "./../models/Users";

export class UserService extends BaseService {
  model = new User();
  resource = UserResource;
  constructor() {
    super();
  }
  create(userData: iUser) {
    return super.create(userData);
  }
}
