export class Hello {
  msg: string;
  msgs: Array<string> = [];
  constructor(msg: string) {
    this.msg = msg;
    this.msgs.push(msg, "", "", "");
    console.log(msg);
  }
}
