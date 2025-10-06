// 2 sonining qandaydir darajasini bildiruvchi n butun soni berilgan (n>0). n=2**k. k ni aniqlovchi programma tuzilsin.

function masala_14(n) {
  let temp = n;
  let k = 0;
  while (temp % 2 === 0) temp /= 2;
  if (temp !== 1) {
    console.log("n 2 ning darajasi emas.");
  } else {
    while (n > 1) {
      n = n / 2;
      k++;
    }

    console.log("k =", k);
  }
  return n;
}
let result = masala_14(32);
