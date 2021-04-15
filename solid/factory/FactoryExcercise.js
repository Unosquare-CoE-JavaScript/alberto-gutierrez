class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
class PersonFactory {
  constructor() {
    this.id = 0;
  }
  createPerson(name) {
    this.person = new Person(this.id, name);
    this.id += 1;
    return this.person;
  }
}
