const prompt = require("prompt-sync")();

// masala-1;
// array ichidagi eng katta va eng kichik sonlarni topib beradigan function yarating.
const arr = [12, 3, 4, 5, 6, 7, 8];
let max = arr[0];
const arrayMax = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
let result = arrayMax(arr);
console.log(result);

const arrMin = [12, 3, 4, 5, 6, 7, 8];
let min = arr[1];
const arrayMin = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arrMin[i];
    }
  }
  return min;
};
let result1 = arrayMin(arr);
console.log(result1);
