import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel";

class User extends BaseModel {
  tableName = "users";
  attributes = {
    userName: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
  };
}

export const UserModel = new User().trigger();
