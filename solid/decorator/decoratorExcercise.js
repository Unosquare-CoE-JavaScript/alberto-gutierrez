class Bird {
  constructor(age = 0) {
    console.log(age);
    this.age = age;
  }

  fly() {
    return this.age < 10 ? "flying" : "too old";
  }
}

class Lizard {
  constructor(age = 0) {
    console.log(age);
    this.age = age;
  }

  crawl() {
    return this.age > 1 ? "crawling" : "too young";
  }
}

class Dragon {
  constructor(age = 0) {
    this.age = age;
    const bird = new Bird(this.age);
    const lizard = new Lizard(this.age);
    this.fly = bird.fly.bind(this);
    this.crawl = lizard.crawl.bind(this);
  }
}

const d = new Dragon(1000);
console.log(d.crawl(), d.fly());
d.age = 5;
console.log(d.crawl(), d.fly());
