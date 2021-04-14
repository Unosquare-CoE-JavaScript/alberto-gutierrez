const uuid = require("uuid");
class Checkout {
  products = []; // should be a map
  add(name, price = 0) {
    if (isNaN(price)) {
      throw new Error("Precios tienen que ser un numero valido");
    }
    const product = { name, price, id: uuid.v4() };
    this.products.push(product);
    return product;
  }
  edit(name, price) {
    const index = this.products.findIndex((product) => name == product.name);
    this.products[index].price = price;
    return this.products[index];
  }
  getTotal() {
    return this.products.reduce((prev, cur) => {
      let discount = 1;
      if (cur.discountPercent) discount = 1 - cur.discountPercent / 100;
      const price = cur.price * discount;
      return prev + price;
    }, 0);
  }
  empty() {
    this.products = [];
  }
  addDiscount(name, qtyNeeded, discountPercent) {
    const products = this.products.filter((product) => product.name === name);
    if (products < qtyNeeded) return;
    this.products = this.products.map((product) => {
      if (product.name !== name) return product;
      return { discountPercent, ...product };
    });
    return this;
  }
}
module.exports = Checkout;
