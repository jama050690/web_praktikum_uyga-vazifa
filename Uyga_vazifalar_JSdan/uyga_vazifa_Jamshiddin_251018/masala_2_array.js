// masala_2:
// n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil
//  topgan massivni hosil qiling va elementlarini chiqaring.(1,2,,4,8....)

export const arDarajason = (son) => {
  let arr = [];
  for (let i = 1; i <= son; i++) {
    arr.push(2 ** i);
  }
  return arr;
};
