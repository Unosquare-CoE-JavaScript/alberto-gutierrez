class ChatRoom {
  constructor() {
    this.user = {};
  }
  addUser(user) {
    this.user[user.name] = user;
    user.chat = this;
  }
  send(msg, from, to) {
    to.receptor(from, msg);
  }
}
class User {
  constructor(name) {
    this.name = name;
  }
  send(msg, to) {
    this.chat.send(msg, this, to);
  }
  receptor(from, msg) {
    console.log(`${from.name}:${msg}`);
  }
}

const chat = new ChatRoom();
const ron = new User("Ron");
const tom = new User("Tom");
const tim = new User("Tim");

chat.addUser(ron);
chat.addUser(tom);
chat.addUser(tim);

ron.send("Hola", tom);
tim.send("Hola", ron);
