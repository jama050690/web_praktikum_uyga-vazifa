// masala_5:
// n ta elementdan tashkil topgan massiv berilgan.Uning elementlarini
// teskari tarbibda chiqaruvchi programma tuzilsin.

let n = Number(prompt("Natural son kiriting: "));
export default function arrTeskari(array) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let element = prompt(`${i + 1}-elementni kiriting: `);
    arr.push(element);
  }
  return array.reverse();
}
