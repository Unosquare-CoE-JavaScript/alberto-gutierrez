import { BaseResource } from "./BaseResource";
export declare class UserResource extends BaseResource {
    id: number | null;
    protected resource: iUser;
    model: import("sequelize/types").ModelCtor<import("sequelize/types").Model<any, any>>;
    constructor(id?: number | null);
    getFromDB(id?: number | null): Promise<this>;
    set username(value: string);
    set password(value: string);
    get username(): string;
}
export interface iUser {
    id?: number | null;
    userName: string;
    password: string;
}
