const characters = [{ person: { name: "Mary" } }, { person: { name: "Juan" } }];
const weapons = ["knife", "blade", "gun", "maze"];
const rooms = ["r1", "r2", "r3"];
const card = {
  character: getRandomItem(characters).person.name,
  weapon: getRandomItem(weapons),
  room: getRandomItem(rooms),
};

console.log(card);
function getRandomItem(arr) {
  const rand = Math.round(Math.random() * (arr.length - 1));
  return arr[rand];
}
