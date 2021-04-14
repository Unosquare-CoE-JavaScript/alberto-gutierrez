class Token {
  constructor(value = 0) {
    this.value = value;
  }
}

class Memento {
  constructor() {
    this.tokens = [];
  }
}

class TokenMachine {
  constructor() {
    this.memento = new Memento();
  }

  addTokenValue(value) {
    return this.addToken(new Token(value));
  }

  addToken(token) {
    this.memento.tokens.push(token);
  }

  revert(m) {
    // todo
  }
}
