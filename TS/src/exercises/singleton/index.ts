class Singleton {
  static used: Singleton | undefined;
  public arr: Array<Boolean> = [];
  constructor() {
    if (!Singleton.used) {
      Singleton.used = this;
    }
    return Singleton.used;
  }
  get counter() {
    return this.arr.length;
  }
  run() {
    this.arr.push(true);
    return this;
  }
}

export default Object.freeze(new Singleton());
