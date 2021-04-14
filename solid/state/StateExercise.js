class StateMachine {
  constructor(initState = "") {
    this.currState = initState;
    this.states = new Map();
  }
  addState(name, state) {
    this.states.set(name, state);
    return this;
  }
  set state(value) {
    console.log(value);
    this.currState = value;
  }
  get next() {
    return this.states.get(this.currState).next;
  }
  select(name) {
    console.log(name);
    return this.states.get(name).callbacks;
  }

  get run() {
    this = { ...this, ...this.select(this.currState) };
  }
}
class State {
  constructor(callbacks, next = []) {
    this.next = next;
    this.callbacks = callbacks;
  }
}
class CombinationLock extends StateMachine {
  constructor(combination) {
    super("LOCKED");
    this.combination = combination.toString();
    this.digits = "0";
    this.addState(
      "LOCKED",
      new State({ enterDigit: this.__enterDigit.bind(this) }, ["VALIDATING"]),
    )
      .addState(
        "VALIDATING",
        { enterDigit: this.__enterDigit, reset: this.__reset },
        ["OPEN", "ERROR"],
      )
      .addState("OPEN", { reset: this.__reset }, ["LOCKED"])
      .addState("ERROR", { reset: this.__reset }, ["LOCKED"]);

    this.run;
  }
  get status() {
    return this.currentState || 1;
  }
  __reset() {
    this.status = "LOCKED";
    this.digitsEntered = 0;
    this.failed = false;
  }

  __enterDigit(digit) {
    digit = digit.toString();
    const [validating] = this.next;
    this.state = validating;
    this.digits = digit;
    let val = this.combination.includes(digit);
    if (!val) {
      const [validating, error] = this.next;
      this.state = error;
      return;
    }
    if (digit === this.combination) {
      const [validating, error] = this.sm.next;
      this.state = validating;
      return;
    }
  }
}

const cl = new CombinationLock(1422);

console.log(cl);
console.log(cl.enterDigit(1));
