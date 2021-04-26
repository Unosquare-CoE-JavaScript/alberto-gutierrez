// TODO: define polyfill for `Object.is(..)`

Object.is = function ObjectIs(v1, v2) {
  if (isInvalidNumber(v1) && isInvalidNumber(v2)) {
    return true;
  }
  const neg1 = isNegZero(v1);
  const neg2 = isNegZero(v2);
  if (neg1 || neg2) {
    return neg1 && neg2;
  }
  return v1 === v2;
};

function isInvalidNumber(val) {
  return val != val;
}
function isNegZero(val) {
  return val === 0 && 1 / val === -Infinity;
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
