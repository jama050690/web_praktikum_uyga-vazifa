const prompt = require("prompt-sync")();

// masala_2;
// ixtiyoriy array yarating va uning ichidagi juft va toq sonlar nechtaligini toping

let arr = [2, 3, 4, 6, 13, 15, 35, 66];

let juft = [];
let toq = [];

const juftToq = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      juft.push(arr[i]);
    } else {
      toq.push(arr[i]);
    }
  }
  return { juft, toq };
};

let result = juftToq();
console.log("Juft sonlar soni: ", result.juft.length);
console.log("Toq sonlar soni: ", result.toq.length);
