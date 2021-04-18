import { Sequelize } from "sequelize";
export declare const db: Sequelize;
export declare function sequelizeConnect(): Promise<void>;
