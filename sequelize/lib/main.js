"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const UserService_1 = require("./app/services/UserService");
server_1.default;
/*
const ur2 = new UserResource();
ur2.username = "Marco";
ur2.password = "123";
ur2.save();

/*
const ur = new UserResource(1);
ur.getFromDB().then((user) => {
  user.username = "Jonh";
  user.password = "Connor";
  user.save();
});*/
/*
const bs = new BaseResource();

bs.model = UserModel;

bs.load(1).then((nbs) => {
  nbs.resource.userName = "pedro";
  nbs.save();
});

*/
const services = new UserService_1.UserService();
services.get().then((vals) => {
    vals.map((resource) => {
        resource.killMe();
    });
});
/*
services.create({ userName: "pepe", password: "juan" }).then((user) => {
  console.log(user);
});
*/
//# sourceMappingURL=main.js.map