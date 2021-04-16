import { sequelizeConnect } from "./db/connections";
class Server {
  static used: any;
  constructor() {
    if (!Server.used) {
      sequelizeConnect();
      Server.used = this;
    }
    return Server.used;
  }
}

const server = new Server();
export default Object.freeze(server);
