const prompt = require("prompt-sync")();

// masala_3;
// stringni teskari qilish(forda);

str = "Jamshiddin";
let natija = " ";
for (let i = str.length - 1; i >= 0; i--) {
  natija += str[i];
}
console.log(natija);

// stringni teskari qilish(forunctionda);

const myName = (name) => {
  str = "Jamshiddin";
  let natija = " ";
  for (let i = str.length - 1; i >= 0; i--) {
    natija += str[i];
  }
  return natija;
};
let result = myName(str);
console.log(result);
