class Fedex {
  calculate(pack) {
    return 1.4;
  }
}
class UPS {
  calculate(pack) {
    return 1.5;
  }
}

class USPS {
  calculate(pack) {
    return 2.4;
  }
}

const pack = { somethin: "some" };

// strat pattern

class Shipping {
  constructor(company) {
    this.company = new company();
  }
  calculate(pack) {
    return this.company.calculate(pack);
  }
}

const ship = new Shipping(Fedex);
let total = ship.calculate();

console.log(total);
