import { Hello } from "./services/hola";
import { iSomethingCool } from "./services/person";
import { User } from "./services/users";
import { Company } from "./exercises/Factory/index";
import { ClientBuilder, Client } from "./exercises/Builder/index";
import { PersonToClientAdapter } from "./exercises/Adapter/index";
import singleton from "./exercises/singleton";

new Hello("Hola mundo");
console.log("hello world!!!");
const p = new User({ name: "juan", lastname: "pepe", gender: false });
p.addContact({ name: "Mary", mail: "a@.com", phone: "33333333" });
const sc: iSomethingCool = (v, b) => {
  console.log(v, b);
};
p.doSomethingCool(sc);
p.setPassword("123");
p.setType("client");
p.setUserName("JonhConnor");

//Singleton

function exec1() {
  const st = singleton;
  st.run();
}
function exec2() {
  const st = singleton;
  st.run();
  console.log("esto es un singleton y deberia ser:", st.counter);
}

exec1();
exec2();

//Factory Usage...
const company = new Company();
company.addEmployee("Juan", "Dev");
company.addEmployee("Pepe", "Dev");
company.addEmployee("Tony", "Dev");
console.log(company.toString());
company.fire("Pepe");
console.log(company.toString());

//Client builder;

const client = new ClientBuilder(new Client());
const saludo = client
  .setName("Pedro")
  .setPhone("33-23-28-07")
  .setAge(32)
  .address.setStreet("Chula vista")
  .setNumber(121)
  .toString();
console.log(saludo.toLocaleUpperCase());

//Adapter
const client2 = new ClientBuilder(new PersonToClientAdapter(p));
const os = client2
  .setAge(33)
  .address.setStreet("monte perros")
  .setNumber(113)
  .toString();
console.log(os);
