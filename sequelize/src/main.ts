import server from "./server";
import { UserResource } from "./app/resources/UserResource";
import { UserService } from "./app/services/UserService";

server;
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
const services = new UserService();
services.get().then((vals) => {
  vals.map((resource: UserResource) => {
    resource.killMe();
  });
});
/*
services.create({ userName: "pepe", password: "juan" }).then((user) => {
  console.log(user);
});
*/
