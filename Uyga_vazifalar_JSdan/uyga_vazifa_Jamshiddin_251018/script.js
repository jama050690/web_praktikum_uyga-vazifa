// Toq sonlar hosil qiluvchi funksiya
export const arToqson = (son) => {
  let arr = [];
  for (let i = 1; arr.length < son; i += 2) {
    arr.push(i);
  }
  return arr;
};

// 2 ning darajalarini hosil qiluvchi funksiya
export const arDarajason = (son) => {
  let arr = [];
  for (let i = 1; i <= son; i++) {
    arr.push(2 ** i);
  }
  return arr;
};
