const prompt = require("prompt-sync")();

// let str = `l1o3r5e6m`;
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   let item = Number(str[i]);
//   if (item) {
//     count += item;
//   }
// }
// console.log(count);

let rts = "l1o3r5e6m";

function sortNumber(symbols) {
  let count = 0;
  for (let i = 0; i < symbols.length; i++) {
    let num = Number(symbols[i]);
    if (num) {
      count += num;
    }
  }
  return count;
}
console.log(count);

// let str = "l1o3r5e6m";

// function convertToNumbers(text) {
//   let result = "";
//   for (let i = 0; i < text.length; i++) {
//     let ch = text[i];
//     if (ch >= "0" && ch <= "9") {
//       result += ch;
//     } else {
//       let code = ch.toLowerCase().charCodeAt(0) - 96;
//       result += code;
//     }
//   }
//   return result;
// }

// console.log(convertToNumbers(str));
