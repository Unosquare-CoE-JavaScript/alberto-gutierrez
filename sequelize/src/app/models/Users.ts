import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel";

export class User extends BaseModel {
  tableName = "users";
  attributes = {
    userName: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
  };
  constructor() {
    super();
  }
}
