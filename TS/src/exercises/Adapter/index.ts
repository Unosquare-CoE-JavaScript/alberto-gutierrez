import { Person } from "./../../services/person";
import { Client } from "./../Builder/index";
export class PersonToClientAdapter extends Client {
  client: Client;
  constructor(public person: Person) {
    super();
    this.client = new Client();
    this.client.name = person.name as string;
  }
  toString() {
    return `Este es el adapdator del cliente ${this.client.name}`;
  }
}
