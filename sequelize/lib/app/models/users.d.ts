import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel";
export declare class User extends BaseModel {
    tableName: string;
    attributes: {
        userName: {
            type: DataTypes.StringDataTypeConstructor;
        };
        password: {
            type: DataTypes.StringDataTypeConstructor;
        };
    };
    constructor();
}
