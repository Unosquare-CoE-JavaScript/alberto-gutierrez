class Numbers {
  number1;
  number2;
  calcWanted;
  constructor(number1, number2, calcWanted) {
    this.number1 = number1;
    this.number2 = number2;
    this.calcWanted = calcWanted;
  }
}

class Chain {
  next(chain) {
    this.nextInChain = chain;
  }
}

class Add extends Chain {
  calc(numbers) {
    if (numbers.calcWanted === "add") {
      return numbers.number1 + numbers.number2;
    }
    return this.nextInChain.calc(numbers);
  }
}
class Subtract extends Chain {
  calc(numbers) {
    if (numbers.calcWanted === "sub") {
      return numbers.number1 - numbers.number2;
    }
    return this.nextInChain.calc(numbers);
  }
}

const n = new Numbers(1, 2, "add");
let add = new Add();
add.next(new Subtract());
console.log(add.calc(n));
