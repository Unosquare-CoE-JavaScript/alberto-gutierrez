const characters = [{ person: { name: "Mary" } }, { person: { name: "Juan" } }];
const weapons = ["knife", "blade", "gun", "maze"];
const rooms = ["r1", "r2", "r3"];
const card = {
  character: getRandomItem(characters).person.name,
  weapon: getRandomItem(weapons),
  room: getRandomItem(rooms),
};

const { character, weapon, room } = card;

console.log(character, weapon, room);

// this is cheating

const [val, val2] = characters.map((char) => char.person.name);
console.log(val, val2);

//
characters.forEach((char) => {
  console.log(char);
});

function getRandomItem(arr) {
  const rand = Math.round(Math.random() * (arr.length - 1));
  return arr[rand];
}
