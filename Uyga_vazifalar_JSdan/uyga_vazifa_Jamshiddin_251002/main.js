// k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.

const prompt = require("prompt-sync")();

function masala_1() {
  console.log("Masala 1...");
  let k = Number(prompt("Butun son kiriting"));
  let n = Number(prompt("Butun son kiriting"));

  k = Math.abs(k);
  for (let i = 1; i <= n; i++) {
    if (n > 0) {
      console.log(k);
    } else {
      console.log(n > 0, "ni kiriting");
    }
  }
}

// a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va
// chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).

function masala_2() {
  console.log("Masala 2...");
  let a = Number(prompt("Butun son kiriting"));
  let b = Number(prompt("Butun son kiriting"));

  if (a >= b) {
    console.log("a < b bo'lishi kerak");
  } else {
    let count = 0;
    for (let i = a; i <= b; i++) {
      console.log(i);
      count++;
    }
    console.log(count, "ta");
  }
}

// a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish
// tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.

function masala_3() {
  console.log("Masala 3...");
  let a = Number(prompt("Butun son kiriting"));
  let b = Number(prompt("Butun son kiriting"));

  if (a >= b) {
    console.log("a < b bo'lishi kerak");
  } else {
    let count = 0;

    for (let i = b - 1; i > a; i--) {
      console.log(i);
      count++;
    }
    console.log(count, "ta son");
  }
}

// Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, ..., 10 kg konfetni
// narxini chiqaruvchi programma tuzilsin.
function masala_4() {
  console.log("Masala 4...");
  let narx = Number(prompt("Haqiqiy son kiriting"));
  let kg = 10;
  for (let i = 1; i <= kg; i++) {
    console.log(narx * i);
  }
}

// Bir kg konfetning narxi berilgan (haqiqiy son).
// 0.1, 0.2, ..., 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.

function masala_5() {
  console.log("Masala 5...");
  let narx = Number(prompt("Haqiqiy son kiriting"));
  let kg = 1;

  for (let i = 0.1; i <= 1; i += 0.1) {
    let summa = narx * i;
    console.log(i.toFixed(1) + " kg = " + summa.toFixed(2));
  }
}

// Bir kg konfetning narxi berilgan (haqiqiy son).
// 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.

function masala_6() {
  console.log("Masala 6...");
  let narx = Number(prompt("Haqiqiy son kiriting"));
  let kg = 2;

  for (let i = 1.2; i <= 2.001; i += 0.1) {
    let summa = narx * i;
    console.log(i.toFixed(1) + " kg = " + summa.toFixed(2));
  }
}

// a va b butun sonlari berilgan (a < b).
// a dan b gacha bo’lgan barcha butun sonlar yig’indisini chiqaruvchi programma tuzilsin.

function masala_7() {
  console.log("Masala 7...");
  let a = Number(prompt("Butun son kiriting"));
  let b = Number(prompt("Butun son kiriting"));

  if (a >= b) {
    console.log("a < b bo'lishi kerak");
  } else {
    let yigindi = 0;
    for (let i = a; i < b; i++) {
      yigindi += i;
    }
    console.log(yigindi);
  }
}

// a va b butun sonlari berilgan (a < b). a dan b gacha bo’lgan
//  barcha butun sonlar ko’paytmasini chiqaruvchi programma tuzilsin.

function masala_8() {
  console.log("Masala 8...");
  let a = Number(prompt("Butun son kiriting"));
  let b = Number(prompt("Butun son kiriting"));

  if (a >= b) {
    console.log("a < b bo'lishi kerak");
  } else {
    let kopaytma = 1;
    for (let i = a; i < b; ++i) {
      kopaytma *= i;
    }
    console.log(kopaytma);
  }
}

// a va b butun sonlari berilgan (a < b). a dan b gacha bo’lgan barcha
//  butun sonlar kvadratlarining yig’indisini chiqaruvchi programma tuzilsin.

function masala_9() {
  console.log("Masala 9 ...");
  let a = Number(prompt("Butun son kiriting"));
  let b = Number(prompt("Butun son kiriting"));

  if (a >= b) {
    console.log("a < b bo'lishi kerak");
  } else {
    let kopaytma = 1;
    yigindi = 0;
    for (let i = a; i < b; ++i) {
      kopaytma = i ** 2;
      yigindi += kopaytma;
    }
    console.log(yigindi);
  }
}

// n butun soni berilgan (n > 0). Quyidagi yig‘indini hisoblovchi programma tuzilsin.
// S = 1 + 1/2 + 1/3 + ⋯ + 1/n

function masala_10() {
  console.log("Masala 10...");
  let n = Number(prompt("Butun son kiriting: "));
  let s = 0;
  for (let i = n; i <= 2 * n; i++) {
    s += i / i;
  }
  return s;
}

// n butun soni berilgan (n > 0). Quyidagi yig‘indini hisoblovchi programma tuzilsin.
// S = n² + (n+1)² + (n+2)² + ⋯ + (2n)²

function masala_11() {
  console.log("Masala 11...");
  let n = Number(prompt("Butun son kiriting: "));
  let s = 0;
  for (let i = n; i <= 2 * n; i++) {
    s += i ** 2;
  }
  return s;
}
// // n butun soni berilgan (n > 0). Quyidagi ko‘paytmani hisoblovchi programma tuzilsin.
// S = 1·1 * 1·2 * 1·3 ⋯ n (n ta ko‘payuvchi)

function masala_12() {
  console.log("Masala 12...");
  let n = Number(prompt("Butun son kiriting: "));
  let s = 1;
  for (let i = 1; i <= n; i++) {
    s *= i;
  }
  return s;
}

// n butun soni berilgan (n > 0). Quyidagi yig‘indini hisoblovchi programma tuzilsin.
// S = 1 - 1·1 + 1·2 - 1·3 + ⋯ (n ta qo‘shiluvchi, ishoralar almashib keladi. Shart operatoridan foydalanmang)

function masala_13() {
  console.log("Masala 13...");
  let n = Number(prompt("Butun son kiriting: "));
  let s = 1;
  for (let i = 1; i < n; i++) {
    s += Math.pow(-1, i) * i;
  }
  return s;
}

// n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi
//  formula asosida hisoblovchi programma tuzilsin.
// n² = 1 + 3 + 5 + ⋯ + (2n - 1)
// Har bir qo‘shiluvchini ekranga chiqarib boring. Natijada ekranda
// 1 dan n gacha bo‘lgan sonlar kvadrati chiqariladi.

function masala_14() {
  console.log("Masala 14...");
  let n = Number(prompt("Butun son kiriting: "));
  let a = 0;
  let b = 1;
  for (let i = 1; i <= n; i++) {
    a += b;
    console.log(`${i} ^ 2 = ${a}`);
    b += 2;
  }
  return n;
}

// n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi
//  formula asosida hisoblovchi programma tuzilsin.
// n² = 1 + 3 + 5 + ⋯ + (2n - 1)
// Har bir qo‘shiluvchini ekranga chiqarib boring. Natijada ekranda
// 1 dan n gacha bo‘lgan sonlar kvadrati chiqariladi.

// const masala_14 = () => {
//   console.log("masala_14...");
//   let n = Number(prompt("Butun son kiriting(n > 0): "));
//   let sum = 0;
//   let odd = 1;

//   for (let i = 1; i <= n; i++) {
//     sum += odd;
//     console.log(`${i} ^ 2 = ${sum}`);
//     odd += 2;
//   }
//   return n;
// };

//  1-masala

// // n butun soni berilgan (n > 0).
// // 1 dan n gacha bo‘lgan sonlarning kvadratlari yig‘indisini hisoblang.

// // Masalan:
// // n = 4 → 1² + 2² + 3² + 4² = 30

// const masala_14 = () => {
//   console.log("masala_14...");
//   let n = Number(prompt("Butun son kiriting(n > 0): "));
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     result += i ** 2;
//   }
//   return result;
// };

// //  2-masala

// // n butun soni berilgan (n > 0).
// // 1 dan n gacha bo‘lgan faqat toq sonlarning kvadratlari yig‘indisini hisoblang.

// //  Masalan:
// // n = 5 → 1² + 3² + 5² = 35

// const masala_14 = () => {
//   console.log("masala_14...");
//   let n = Number(prompt("Butun son kiriting(n > 0): "));
//   let result = 0;
//   for (let i = 1; i <= n; i += 2) {
//     result += i ** 2;
//   }

//   return result;
// };

// n butun soni va a haqiqiy soni berilgan (n > 0). a ning n-darajasini aniqlovchi programma tuzilsin.
// aⁿ = a * a * a ⋯ a (n ta)

function masala_15() {
  console.log("Masala 15...");
  let a = Number(prompt("a sonini kiriting: "));
  let n = Number(prompt("n sonini kiriting (n > 0): "));

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= a;
  }

  console.log(`${a} ning ${n}-darajasi = ${result} "yigindi"`);
  return result;
}

// n butun soni va b haqiqiy soni berilgan (n > 0). b ning n-darajasini aniqlovchi programma tuzilsin.
// bⁿ = b* b * b ⋯ b (n ta)

// function masala_16() {
//   console.log("masala_16...");
//   let n = Number(prompt("Butun son kiriting"));
//   let b = Number(prompt("Butun son kiriting"));
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= b;
//   }
//   console.log(` ${b} ning ${n} darajasi= ${result}`);
//  return result;
// }

// n butun soni va c haqiqiy soni berilgan (n > 0). c ning n-darajasini aniqlovchi programma tuzilsin.
// cⁿ = c* c * c ⋯ c (n ta)

// function masala_15() {
//   console.log("masala_15...");
//   let c = Number(prompt("Butun son kiriting"));
//   let n = Number(prompt("Butun son kiriting"));
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= c;
//   }
//   console.log(`${c}  ning ${n} darajasi = ${result}`);

//   return result;
// }

// n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan
// foydalanib a ning 1 dan n gacha bo‘lgan barcha darajalarini chiqaruvchi programma tuzilsin.

const masala_16 = () => {
  console.log("masala_16...");

  let n = Number(prompt("n butun sonini kiriting ( n > 0): "));
  let a = Number(prompt("a haqiqiy sonini kiriting: "));
  for (let i = 1; i <= n; i++) {
    let result = a ** i;
    console.log(`${a} ning ${i} dan =${result}`);
  }
  return result;
};

// n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib
//  quyidagi a ning 1 dan n gacha bo‘lgan barcha darajalarini chiqaruvchi va
// yig‘indini hisoblovchi programma tuzilsin.
// 1 + a + a² + a³ + ⋯ + aⁿ

const masala_17 = () => {
  console.log("masala_17...");
  let n = Number(prompt("n butun sonini kiriting ( n > 0): "));
  let a = Number(prompt("a haqiqiy sonini kiriting: "));
  let result = 0;
  for (let i = 0; i <= n; i++) {
    let sum = a ** i;
    result += sum;
    console.log(`${a} ning + ${n} gacha + ${sum} darajalari= ${result}`);
  }
  return result;
};

// n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib quyidagi
//  a ning 1 dan n gacha bo‘lgan barcha darajalarini chiqaruvchi va yig‘indini hisoblovchi
//  programma tuzilsin. 1 - a + a² - a³ + ⋯ + (-1)ⁿ aⁿ
// Shart operatoridan foydalanilmasin.

const masala_18 = () => {
  console.log("masala_19...");
  let n = Number(prompt("n butun sonini kiriting ( n > 0): "));
  let a = Number(prompt("a haqiqiy sonini kiriting: "));
  let result = 0;
  for (let i = 0; i <= n; i++) {
    let sum = (-1) ** i * a ** i;
    result += sum;
    console.log(
      `${a} "ning" + ${n} "gacha" + ${sum} darajalari= ${result} "yigindi"`
    );
  }
  return result;
};

// n butun soni berilgan (n > 0). Birdan n gacha bo‘lgan sonlar ko‘paytmasini chiqaruvchi programma tuzilsin.
// n! = 1 * 2 * ⋯ * n
// Birdan n gacha bo‘lgan sonlar ko‘paytmasi n faktorial deyiladi.

const masala_19 = () => {
  console.log("masala_19...");
  let natija = 1;
  let n = Number(prompt("n butun sonini kiriting ( n > 0): "));
  for (i = 1; i <= n; i++) {
    natija *= i;
  }
  console.log(`${n} !=${natija}`);
  return natija;
};

// n butun soni berilgan (n > 0). Bir sikldan foydalanilgan holda quyidagi
// yig‘indini hisoblovchi programma tuzilsin.
// 1! + 2! + 3! + ... + n!
const masala_20 = () => {
  console.log("masala_20...");
  let natija = 1;
  let n = Number(prompt("n butun sonini kiriting ( n > 0): "));
  for (i = 1; i <= n; i++) {
    natija += i;
  }
  console.log(`${natija}!`);
  return natija;
};

// n butun soni berilgan (n > 0). Bir sikldan foydalanilgan holda quyidagi yig‘indin
//  hisoblovchi programma tuzilsin. (Olingan natija taxminan e = exp(1) ga yaqinlashadi)
// 1 + 1/(1!) + 1/(2!) + 1/(3!) + ... + 1/(n!)

const masala_21 = () => {
  console.log("masala_21...");
  let natija = 1;
  let n = Number(prompt("n butun sonini kiriting ( n > 0): "));
  for (i = 1; i <= n; i++) {
    natija += 1 / i;
  }
  console.log(`${natija}!`);
  return natija;
};

// n butun soni va x haqiqiy soni berilgan (n > 0). Quyidagi yig‘indini hisoblovchi programma tuzilsin. (Olingan natija taxminan eˣ ga yaqinlashadi)
// 1 + x + x²/(2!) + x³/(3!) + ... + xⁿ/(n!)
const masala_22 = () => {
  console.log("masala_22...");
  let natija = 1;
  let n = Number(prompt("n butun sonini kiriting ( n > 0): "));
  let x = Number(prompt("x haqiqiy sonini kiriting: "));
  for (i = 1; i <= n; i++) {
    natija += x ** i / i;
  }
  console.log(` "e^x ga yaqinlashyapti: ",${natija}!`);
  return natija;
};

// // n butun soni va x haqiqiy soni berilgan (n > 0). Quyidagi yig‘indini
// hisoblovchi programma tuzilsin. (Olingan natija taxminan sin(x) ga yaqinlashadi)
// x − x³/(3!) + x⁵/(5!) − ... + (−1)ⁿ x²ⁿ⁺¹ / (2n+1)!

const masala_23 = () => {
  console.log("masala_23...");
  let natija = 0;
  let n = Number(prompt("n butun sonini kiriting ( n > 0): "));
  let x = Number(prompt("x haqiqiy sonini kiriting: "));
  let factorial = (num) => {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };
  for (i = 0; i <= n; i++) {
    natija += ((-1) ** i * x ** (2 * i + 1)) / factorial(2 * i + 1);
  }
  console.log(` "sin(x) ga yaqinlashyapti: ",${natija}!`);
  return natija;
};

let displayCommands =
  "----=== MASALA RAQAMLARI ===----\n" +
  "1-masala - 1\n" +
  "2-masala - 2\n" +
  "3-masala - 3\n" +
  "4-masala - 4\n" +
  "5-masala - 5\n" +
  "6-masala - 6\n" +
  "7-masala - 7\n" +
  "8-masala - 8\n" +
  "9-masala - 9\n" +
  "10-masala - 10\n" +
  "11-masala - 11\n" +
  "12-masala - 12\n" +
  "13-masala - 13\n" +
  "14-masala - 14\n" +
  "15-masala - 15\n" +
  "16-masala - 16\n" +
  "17-masala - 17\n" +
  "18-masala - 18\n" +
  "19-masala - 19\n" +
  "20-masala - 20\n" +
  "21-masala - 21\n" +
  "22-masala - 22\n";

console.log(displayCommands);

console.log("Masala raqamini kiriting: ");
let result;

let num = Number(prompt());
switch (num) {
  case 1:
    masala_1();
    break;
  case 2:
    masala_2();
    break;
  case 3:
    masala_3();
    break;
  case 4:
    masala_4();
    break;
  case 5:
    masala_5();
    break;
  case 6:
    masala_6();
    break;
  case 7:
    masala_7();
    break;
  case 8:
    masala_8();
    break;
  case 9:
    masala_9();
    break;
  case 10:
    result = masala_10();
    break;
  case 11:
    result = masala_11();
    break;
  case 12:
    result = masala_12();
    break;
  case 13:
    result = masala_13();
    break;
  case 14:
    result = masala_14();
    break;
  case 15:
    result = masala_15();
    break;
  case 16:
    result = masala_16();
    break;
  case 17:
    result = masala_17();
    break;
  case 18:
    result = masala_18();
    break;
  case 19:
    result = masala_19();
    break;
  case 20:
    result = masala_20();
    break;
  case 21:
    result = masala_21();
    break;
  case 22:
    result = masala_22();
    break;
  case 23:
    result = masala_23();
    break;

  default:
    console.log("Masala raqami noto'g'ri kiritildi. Qayta urinib ko'ring.");
}
console.log(result);
