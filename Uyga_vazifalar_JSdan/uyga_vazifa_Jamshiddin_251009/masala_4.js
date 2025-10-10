const prompt = require("prompt-sync")();

// masala_4;
// function argumentiga berilgan sonlarning yig'indisini toping arrey yordamida:

const arr = [3, 12, 5, 21, 9, 2, 13];
let natija = 0;

const arrayYigindi = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    natija += arr[i];
  }
  return natija;
};
let result = arrayYigindi(arr);
console.log(result);
