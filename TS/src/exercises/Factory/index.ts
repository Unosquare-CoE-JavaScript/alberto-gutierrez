export class Company {
  employees: Map<string, Employee> = new Map();
  addEmployee(name: string, type: string): Employee {
    const employee = new Employee(name, type);
    this.employees.set(name, employee);
    return employee;
  }
  fire(name: string) {
    const employee = this.employees.get(name);
    this.employees.delete(name);
    return employee;
  }
  toString(): string {
    const employees: Array<string> = [];
    this.employees.forEach((employee) => {
      employees.push(`${employee.type}:${employee.name}`);
    });
    return employees.join("\n");
  }
}
class Employee {
  constructor(public name: string, public type: string) {}
}
