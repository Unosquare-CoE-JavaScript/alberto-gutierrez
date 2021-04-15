export class Person {
  constructor(
    public data: {
      name: String;
      lastname: String;
      gender: Boolean;
      contact?: any;
    },
  ) {}
  addContact(data: iEmailData & iPhoneData) {
    this.data.contact = data;
  }
  get name() {
    return this.data.name;
  }
  //signature
  public rocks(rocks: "yes", msg: string): void;
  public rocks(rocks: "no"): void;

  public rocks(rocks: "yes" | "no", msg: string = ""): void {
    if (rocks === "yes") console.log(msg);
  }
  doSomethingCool(callback: iSomethingCool) {
    console.log("doing something cool");
    callback?.(1, 2);
  }
}

export interface iSomethingCool {
  (val1: number, val2: number): void;
}

interface iPhoneData {
  name: string;
  phone: string;
}
interface iEmailData {
  name: string;
  mail: string;
}
type abc = "a" | "b" | "c";
