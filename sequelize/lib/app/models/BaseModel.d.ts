export declare class BaseModel {
    tableName: string;
    attributes: {};
    constructor();
    get db(): import("sequelize/types").ModelCtor<import("sequelize/types").Model<any, any>>;
}
