const prompt = require("prompt-sync")();
// Fibonachchi sonlarini chiqar (faqat dastlabki 10 ta soni: 0, 1, 1, 2, 3, 5, 8, ...).

function masala_8(a, b) {
  let count = 2;

  while (count < 10) {
    let fibonachchi = a + b;
    console.log(fibonachchi);

    a = b;
    b = fibonachchi;
    count++;
  }
  return count;
}
let result = masala_8(0, 1);
console.log(result, "ta");
