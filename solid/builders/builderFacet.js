class Person {
  constructor() {
    this.name = "";
    this.address = "";
    this.job = "";
  }
  toString() {
    return `Person Lives at ${this.address} in ${this.city}, works at ${this.company} as a ${this.position}`;
  }
}

class PersonBuilder {
  constructor(person = new Person()) {
    this.person = person;
  }

  get lives() {
    return new PersonAddressBuilder(this.person);
  }
  get works() {
    return new PersonWorksBuilder(this.person);
  }
  build() {
    return this.person;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }
  at(address) {
    this.person.address = address;
    return this;
  }
  with(postCode) {
    this.person.postCode = postCode;
    return this;
  }
  in(city) {
    this.person.city = city;
    return this;
  }
}

class PersonWorksBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }
  as(position) {
    this.person.position = position;
    return this;
  }
  in(company) {
    this.person.company = company;
    return this;
  }
  earns(money) {
    this.person.salary = money;
    return this;
  }
}
let person = new PersonBuilder();

let msg = person.lives
  .at("monte pepe")
  .with(44340)
  .in("guadalajara")
  .works.as("developer")
  .in("unosquare")
  .earns(500)
  .build()
  .toString();

console.log(msg);
