// TODO: write the validation functions
function isValidName(name = "") {
  if (!name) return false;
  return Boolean(name.match(/[a-zA-Z]{3,}/g));
}
function isAlphanumeric(val) {
  const ty = typeof val;
  return ty === "string" || ty === "number";
}
function hoursAttended(attended, duration) {
  if (!isAlphanumeric(attended) || !isAlphanumeric(duration)) {
    return false;
  }
  attended = Number(attended);
  duration = Number(duration);
  if (!attended || !duration) {
    return false;
  }
  if (!Number.isInteger(attended) || !Number.isInteger(duration)) {
    return false;
  }
  return attended <= duration;
}
const test = [];
// tests:
test.push(isValidName("Frank") === true);
test.push(hoursAttended(6, 10) === true);
test.push(hoursAttended(6, "10") === true);
test.push(hoursAttended("6", 10) === true);
test.push(hoursAttended("6", "10") === true);

test.push(isValidName(false) === false);
test.push(isValidName(null) === false);
test.push(isValidName(undefined) === false);
test.push(isValidName("") === false);
test.push(isValidName("  \t\n") === false);
test.push(isValidName("X") === false);
test.push(hoursAttended("", 6) === false);
test.push(hoursAttended(6, "") === false);
test.push(hoursAttended("", "") === false);
test.push(hoursAttended("foo", 6) === false);
test.push(hoursAttended(6, "foo") === false);
test.push(hoursAttended("foo", "bar") === false);
test.push(hoursAttended(null, null) === false);
test.push(hoursAttended(null, undefined) === false);
test.push(hoursAttended(undefined, null) === false);
test.push(hoursAttended(undefined, undefined) === false);
test.push(hoursAttended(false, false) === false);
test.push(hoursAttended(false, true) === false);
test.push(hoursAttended(true, false) === false);
test.push(hoursAttended(true, true) === false);
test.push(hoursAttended(10, 6) === false);
test.push(hoursAttended(10, "6") === false);
test.push(hoursAttended("10", 6) === false);
test.push(hoursAttended("10", "6") === false);
test.push(hoursAttended(6, 10.1) === false);
test.push(hoursAttended(6.1, 10) === false);
test.push(hoursAttended(6, "10.1") === false);
test.push(hoursAttended("6.1", 10) === false);
test.push(hoursAttended("6.1", "10.1") === false);

test.forEach((val, key) => {
  console.log(key, val);
});
