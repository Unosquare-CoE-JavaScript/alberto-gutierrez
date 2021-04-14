class Product {
  productData = {};
  addProduct(name, price) {}
  editProduct(id, data) {}
  toString() {
    return this;
  }
}

class DigitalProduct extends Product {
  constructor(name, price) {
    super(name, price);
  }
  getAccessKey() {}
  expirationDate() {}
}
class MaterialProduct extends Product {
  deliveryCompany(delivery) {}
}
