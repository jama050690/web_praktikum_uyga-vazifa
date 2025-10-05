const prompt = require("prompt-sync")();
let str = "l1o3r5e6m";

function masala_15_2(symbols) {
  let i = 0;
  let word = "";
  while (i < symbols.length) {
    let ch = symbols[i];
    if (isNaN(ch)) {
      word += ch;
    }
    i++;
  }
  return word;
}

let result = masala_15_2(str);
console.log(result);
