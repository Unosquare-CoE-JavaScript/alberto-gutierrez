import { Dialect, Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const {
  DB_USER = "",
  DB_PASSWORD = "",
  DB_NAME = "",
  DB_HOST = "",
  DB_ENGINE = "mysql",
} = process.env;

export const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_ENGINE as Dialect,
});

export async function sequelizeConnect() {
  try {
    console.log("message");
    await db.authenticate();
    console.log("message");
  } catch (e) {
    console.log(e);
  }
}
