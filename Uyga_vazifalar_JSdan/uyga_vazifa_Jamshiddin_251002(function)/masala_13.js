const prompt = require("prompt-sync")();

// n butun soni berilgan (n>0).Agar n soni 3 ning darajasi "3-ning darajasi",
//  aks holda "3-ning darajasi emas" degan natija chiqaruvchi programma
//  tuzilsin. Qoldiqli bo'lish va bo'lish ammalarini ishlatmang.

function masala_13(n) {
  let son = 1;
  if (n <= 0) {
    console.log("n musbat bo'lishi kerak");
  } else {
    while (son < n) {
      son = son * 3;
    }
    if (son === n) {
      console.log("3-ning darajasi");
    } else {
      console.log("3-ning darajasi emas");
    }
  }
  return son;
}
let result = masala_13(81);
