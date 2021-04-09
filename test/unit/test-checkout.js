const expect = require("chai").expect;
const Checkout = require("../../services/Checkout");

//Investigar como settear un objeto para todos los tests.
const checkout = new Checkout();

describe("Checkout", () => {
  it("Is able to add products to checkout?", () => {
    const result = checkout.add("Camisa Roja", 200);
    expect(result).to.have.property("price");
  });
  it("throws an error when send anything but a number in price", () => {
    expect(checkout.add.bind(checkout, "Camisa roja", "pepe")).to.throw(Error);
  });
  it("Is able to set the product price?", () => {
    const price = 210;
    const result = checkout.edit("Camisa Roja", price);
    expect(result).to.have.property("price");
    expect(result.price).to.be.equal(price);
  });
  it("Is able to empty the cart", () => {
    checkout.vaciar();
    expect(checkout.products.length).to.be.equal(0);
  });
  it("is able to calculate the total of the purchase", () => {
    for (let index = 0; index <= 10; index++) {
      checkout.add(Date.now(), 200);
    }
    const total = checkout.getTotal();
    expect(total).to.be.equal(2200);
  });
});
