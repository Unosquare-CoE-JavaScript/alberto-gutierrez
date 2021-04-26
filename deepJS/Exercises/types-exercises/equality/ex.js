// TODO: write `findAll(..)`

function findAll(query, arr) {
  return arr.filter((val) => {
    if (Object.is(query, val)) {
      return true;
    } else if (query == null && val == null) {
      return true;
    } else if (typeof query == "boolean") {
      if (query === val) {
        return true;
      }
    } else if (
      typeof query == "string" &&
      query.trim() != "" &&
      typeof val == "number" &&
      !Object.is(-0, val)
    ) {
      if (query == val) {
        return true;
      }
    } else if (
      typeof query == "number" &&
      !Object.is(query, -0) &&
      !Object.is(query, NaN) &&
      !Object.is(query, Infinity) &&
      !Object.is(query, -Infinity) &&
      typeof v == "string" &&
      v.trim() != ""
    ) {
      if (query == val) {
        return true;
      }
    }
    return false;
  });
}
// tests:
var myObj = { a: 2 };

var values = [
  null,
  undefined,
  -0,
  0,
  13,
  42,
  NaN,
  -Infinity,
  Infinity,
  "",
  "0",
  "42",
  "42hello",
  "true",
  "NaN",
  true,
  false,
  myObj,
];

console.log(setsquery(findAll(null, values), [null, undefined]) === true);
console.log(setsquery(findAll(undefined, values), [null, undefined]) === true);
console.log(setsquery(findAll(0, values), [0, "0"]) === true);
console.log(setsquery(findAll(-0, values), [-0]) === true);
console.log(setsquery(findAll(13, values), [13]) === true);
console.log(setsquery(findAll(42, values), [42, "42"]) === true);
console.log(setsquery(findAll(NaN, values), [NaN]) === true);
console.log(setsquery(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsquery(findAll(Infinity, values), [Infinity]) === true);
console.log(setsquery(findAll("", values), [""]) === true);
console.log(setsquery(findAll("0", values), [0, "0"]) === true);
console.log(setsquery(findAll("42", values), [42, "42"]) === true);
console.log(setsquery(findAll("42hello", values), ["42hello"]) === true);
console.log(setsquery(findAll("true", values), ["true"]) === true);
console.log(setsquery(findAll(true, values), [true]) === true);
console.log(setsquery(findAll(false, values), [false]) === true);
console.log(setsquery(findAll(myObj, values), [myObj]) === true);

console.log(setsquery(findAll(null, values), [null, 0]) === false);
console.log(setsquery(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsquery(findAll(0, values), [0, -0]) === false);
console.log(setsquery(findAll(42, values), [42, "42hello"]) === false);
console.log(setsquery(findAll(25, values), [25]) === false);
console.log(
  setsquery(findAll(Infinity, values), [Infinity, -Infinity]) === false,
);
console.log(setsquery(findAll("", values), ["", 0]) === false);
console.log(setsquery(findAll("false", values), [false]) === false);
console.log(setsquery(findAll(true, values), [true, "true"]) === false);
console.log(setsquery(findAll(true, values), [true, 1]) === false);
console.log(setsquery(findAll(false, values), [false, 0]) === false);

// ***************************

function setsquery(arr1, arr2) {
  if (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length == arr2.length
  ) {
    for (let v of arr1) {
      if (!arr2.includes(v)) return false;
    }
    return true;
  }
  return false;
}
