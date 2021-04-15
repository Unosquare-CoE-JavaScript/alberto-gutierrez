import { Person } from "./person";

//Decorator  || Builder
export class User extends Person implements iUser {
  username: string = "";
  password: string = "";
  type: string = "";

  constructor(public data: any) {
    super(data);
  }
  setUserName(username: string): this {
    this.username = username;
    return this;
  }

  setPassword(password: string) {
    this.password = password;
    console.log("*********", "es tu nueva contrasena");
    return this;
  }
  setType(type: "client" | "admin" | "employee") {
    this.type = type;
    return this;
  }
}

interface iUser {
  type: string;
  username: string;
  setUserName(username: string): this;
  setPassword(password: string): this;
  setType(type: string): this;
}
