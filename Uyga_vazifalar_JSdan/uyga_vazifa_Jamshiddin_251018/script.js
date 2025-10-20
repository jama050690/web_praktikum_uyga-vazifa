const prompt = require("prompt-sync")();

let n = Number(prompt("Natural son kiriting: "));

const arDarajason = (son1) => {
  let arr = [];
  for (let i = 1; i <= son1; i++) {
    arr.push(2 ** i); // yoki Math.pow(2, i)
  }
  return arr;
};

let result = arDarajason(n);
console.log("2 sonining dastlabki " + n + " ta darajasi:", result);
