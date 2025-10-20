// masala_4:
// n natura soni berilgan.Dastlabki hadi n ta Fibanachchi
//  sonlaridan tashkil topgan massivni hosil qiling va
// elementlarini chiqaring.
// F)=1;F1=1;F[k]=F[k-1]+F[k-2]; k=2,3,4,...

export default function fibArray(n3) {
  let arr = [];
  if (n3 <= 0) return arr;
  if (n3 >= 1) arr.push(1);
  if (n3 >= 2) arr.push(1);

  for (let i = 2; i < n3; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}
