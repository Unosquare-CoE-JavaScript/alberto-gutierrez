class Game {
  constructor() {
    this.npc = new Map();
    this.count = 0;
  }
  addNpc(npc) {
    this.npc.set(++this.count, npc);
    return this.count;
  }
  getNpcByType(type) {
    return [...this.npc].filter(([, npc]) => {
      return type === npc.type;
    });
  }
  removeNpcById(id) {
    this.npc.delete(id);
  }
}

class Rat {
  constructor(game) {
    this.type = "rat";
    this.id = game.addNpc(this);
    this.game = game;
  }
  get attack() {
    const qty = this.game.getNpcByType(this.type).length;
    return qty || 1;
  }
  die() {
    this.game.removeNpcById(this.id);
  }
}
