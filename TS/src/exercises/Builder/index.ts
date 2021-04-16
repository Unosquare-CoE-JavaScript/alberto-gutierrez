type AddressType = { street?: string; number?: number; state?: string };
export class Client {
  public name: string | undefined;
  public age: number | undefined;
  public phone: string | undefined;
  public address: AddressType = {};
  constructor() {}
  toString() {
    return `mi nombre es ${this.name}, tengo ${this.age} y vivo en ${this.address.street} ${this.address.number}`;
  }
}
export class ClientBuilder {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }
  setName(name: string) {
    this.client.name = name;
    return this;
  }
  setAge(age: number) {
    this.client.age = age;
    return this;
  }
  setPhone(phone: string) {
    this.client.phone = phone;
    return this;
  }
  get address() {
    return new AddressBuilder(this.client);
  }
  toString() {
    return this.client.toString();
  }
}

class AddressBuilder extends ClientBuilder {
  constructor(client: Client) {
    super(client);
  }

  setStreet(streetName: string) {
    this.client.address.street = streetName;
    return this;
  }
  setNumber(number: number) {
    this.client.address.number = number;
    return this;
  }
  setState(number: number) {
    this.client.address.number = number;
    return this;
  }
}
