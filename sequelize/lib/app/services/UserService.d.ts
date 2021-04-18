import { Newable } from "../../utils/types";
import { iUser } from "../resources/UserResource";
import { BaseService } from "./BaseService";
import { BaseResource } from "./../resources/BaseResource";
import { User } from "./../models/Users";
export declare class UserService extends BaseService {
    model: User;
    resource: Newable<BaseResource>;
    constructor();
    create(userData: iUser): Promise<import("sequelize/types").Model<any, any>>;
}
