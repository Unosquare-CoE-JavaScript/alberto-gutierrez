class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }
  subscribe(handler) {
    this.handlers.set(++this.count, handler);
  }
  unsubscribe(id) {
    this.handlers.delete(id);
  }
  run(sender, args) {
    this.handlers.forEach((v) => v?.(sender, args));
  }
}

class IllnessMarker {
  constructor(address) {
    console.log(address);
  }
}
class Person {
  constructor(address) {
    this.address = address;
    this.fallsIll = new Event();
  }
  isIll() {
    this.fallsIll.run(this, new IllnessMarker(this.address));
  }
}
