class CryptoCurrencyAPI {
  getPriceByType(type) {
    console.log("Heavy Operation", type);
    switch (type) {
      case "Bitcoin":
        return 500;
      case "Other":
        return 100;

      default:
        break;
    }
  }
}

class CriptoProxy extends CryptoCurrencyAPI {
  constructor() {
    super();
  }
  cache = {};
  getPriceByType(type) {
    if (!this.cache[type]) {
      this.cache[type] = super.getPriceByType(type);
    }
    return this.cache[type];
  }
}

const currency = new CriptoProxy();
let price = currency.getPriceByType("Bitcoin");
console.log(price);
price = currency.getPriceByType("Bitcoin");
price = currency.getPriceByType("Other");
console.log(price, 2);
