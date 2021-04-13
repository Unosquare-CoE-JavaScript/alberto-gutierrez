class AddCommand {
  constructor(value = 0) {
    this.value = value;
  }
  execute(currentValue) {
    return currentValue + this.value;
  }
  undo(currentValue) {
    return currentValue - this.value;
  }
}
class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }
  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }
  undo() {
    const command = this.history.pop();
    this.value = command?.undo(this.value);
  }
}

const calculator = new Calculator();
calculator.executeCommand(new AddCommand(10));
calculator.executeCommand(new AddCommand(10));
calculator.executeCommand(new AddCommand(10));
console.log(calculator.value);
calculator.undo();
console.log(calculator.value);
