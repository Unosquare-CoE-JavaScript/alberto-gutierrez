"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeConnect = exports.db = void 0;
const sequelize_1 = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
const { DB_USER = "", DB_PASSWORD = "", DB_NAME = "", DB_HOST = "", DB_ENGINE = "mysql", } = process.env;
exports.db = new sequelize_1.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_ENGINE,
});
async function sequelizeConnect() {
    try {
        console.log("message");
        await exports.db.authenticate();
        console.log("message");
    }
    catch (e) {
        console.log(e);
    }
}
exports.sequelizeConnect = sequelizeConnect;
//# sourceMappingURL=connections.js.map