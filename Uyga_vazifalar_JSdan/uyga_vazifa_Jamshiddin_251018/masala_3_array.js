// masala_3:
// n natural soni va arifmetik progressiyaning dastlabki
//  hadi A va ayirma D berilgan.Arifmetik progresssiyanig
// dastlabki n ta hadidan tashkil topgan massivni qiling
// va elemenentlarini chiqaring.Ai = A(i-1) + D;

const arrArifmetik = (n, A, D) => {
  let arr = [A];
  for (let i = 1; i < n; i++) {
    arr.push(arr[i - 1] + D);
  }
  return arr;
};

export { arrArifmetik };
