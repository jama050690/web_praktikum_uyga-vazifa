const prompt = require("prompt-sync")();

// masala-1;
// array ichidagi eng katta va eng kichik sonlarni topib beradigan function yarating.
const arr = [12, 8, 4, 5, 6, 7, 8];

const arrayMax = () => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
const arrayMin = () => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

let result = arrayMax(arr);
let result1 = arrayMin(arr);
console.log(result, result1);
