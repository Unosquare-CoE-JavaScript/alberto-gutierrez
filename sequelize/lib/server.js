"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = require("./db/connections");
class Server {
    constructor() {
        if (!Server.used) {
            connections_1.sequelizeConnect();
            Server.used = this;
        }
        return Server.used;
    }
}
const server = new Server();
exports.default = Object.freeze(server);
//# sourceMappingURL=server.js.map