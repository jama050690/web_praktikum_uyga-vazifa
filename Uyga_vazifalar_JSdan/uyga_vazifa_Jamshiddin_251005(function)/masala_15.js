const prompt = require("prompt-sync")();

let str = `l1o3r5e6m`;
let count = 0;
function masala_15() {
  for (let i = 0; i < str.length; i++) {
    let item = Number(str[i]);
    if (item) {
      count += item;
    }
  }
  return count;
}
let result = masala_15();
console.log(result);
