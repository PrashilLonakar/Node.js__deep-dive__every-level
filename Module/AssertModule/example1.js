// Clearing Console
console.clear();

// Importing module:
const assert = require("assert");

let x = 5;
let y = 5;

try {
  // Checking condition
  assert(x == y);

  // if true it will not return anything.
  // if false it will throw the catch error.
} catch {
  // Error output
  console.log(`${x} is not equal to ${y}`);
}
