class Person {
  constructor(name) {
    this.name = name;
    this.chatLog = [];
  }
  receive(who, msg) {
    let s = `${who}: ${mgs}`;
    this.chatLog.push(s);
  }
}
class ChatRoom {
  constructor() {
    this.people = [];
  }
  join(person) {
    let joinMsg = `${person.name} has joined`;
    this.broadcast("room", joinMsg);
    person.room = this;
    this.people.push(p);
  }
  broadcast(who, msg) {
    for (let person of this.people) {
      if (person.name !== who) {
        person.receive(msg);
      }
    }
  }
  message(who, to, msg) {}
}
