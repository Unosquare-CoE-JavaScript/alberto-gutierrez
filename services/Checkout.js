const uuid = require("uuid");
class Checkout {
  products = [];
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
      return prev + cur.price;
    }, 0);
  }
  vaciar() {
    console.log("wtf");
    this.products = [];
  }
}
module.exports = Checkout;
