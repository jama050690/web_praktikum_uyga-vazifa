const prompt = require("prompt-sync")();

// masala-1:
// n natural soni berilgan. Dastlabki n ta toq sondan tashkil topgan
// massivni hosil qiling va elementlarini chiqaring.

let n = Number(prompt("Natural son kiriting: "));

const arToqson = (son) => {
  let arr = [];
  for (let i = 1; arr.length < son; i += 2) {
    arr.push(i);
  }
  return arr;
};

let result = arToqson(n);
console.log(n + " ta toq son:", result);
