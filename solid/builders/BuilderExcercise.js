class CodeBuilder {
  constructor(className) {
    this.fields = [];
    this.className = className;
  }
  addField(fieldName) {
    this.fields.push(fieldName);
    return this;
  }
  __printConstructor() {
    const length = this.fields.length;
    return length > 0
      ? `
  constructor(${this.fields.join(",")}) {
    ${this.fields.map((field) => `this.${field} = ${field};`).join("\n    ")}
  }`
      : "";
  }
  toString() {
    return `class ${this.className} {${this.__printConst()}
}`;
  }
}

const cb = new CodeBuilder("Person");
console.log(cb.addField("name").addField("age").toString());

/*
class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
}
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
*/
