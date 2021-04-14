class Employee {
  constructor(name, salary) {
    this._name = name;
    this._salary = salary;
  }
  getSalary() {
    return this._salary;
  }
  setSalary(val) {
    this._salary = val;
  }
  allow(visitor) {
    visitor(this);
  }
}

const em = new Employee("juan", 1000);

function visitor(em) {
  em.setSalary(em.getSalary() * 2);
}

em.allow(visitor);
console.log(em.getSalary());
