class SingleValue {
  constructor(number) {
    this.number = number;
  }
  [Symbol.iterator]() {
    let returned = false;
    return {
      next: () => ({
        value: this.number,
        done: returned++,
      }),
    };
  }
}
class ManyValues extends Array {
  // this is confusing.
}

function sum(arr) {
  let total = 0;
  for (let items of arr) {
    for (let values of items) {
      total += values;
    }
  }
  return total;
}

const sv = new SingleValue(11);
const mv = new ManyValues();
mv.push(22);
mv.push(33);
let total = sum([sv, mv]);
console.log(total);
