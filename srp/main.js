class Journal {
  entries = [];

  constructor() {}
  addEntry(text) {
    this.entries.push(text);
  }
  removeEntry(index) {
    delete this.entries[index];
  }
  toString() {
    return this.entries.map((entry, key) => `${key + 1}: ${entry}`).join("\n");
  }
}
class PersistanceManager {
  save(fileName, data) {}
}
const journal = new Journal();
journal.addEntry("Estoy cansado");
journal.addEntry("Estoy ansioso");
console.log(journal.toString());
