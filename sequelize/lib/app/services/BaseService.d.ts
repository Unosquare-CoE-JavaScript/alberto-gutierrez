import { Newable } from "../../utils/types";
import { Collection } from "../resources/BaseResource";
import { BaseResource } from "./../resources/BaseResource";
import { BaseModel } from "./../models/BaseModel";
export declare class BaseService {
    model: BaseModel;
    resource: Newable<BaseResource>;
    get(): Promise<Collection<BaseResource>>;
    show(id: string | number): Promise<import("sequelize/types").Model<any, any> | null>;
    create(data: {
        [key: string]: any;
    }): Promise<import("sequelize/types").Model<any, any>>;
}
