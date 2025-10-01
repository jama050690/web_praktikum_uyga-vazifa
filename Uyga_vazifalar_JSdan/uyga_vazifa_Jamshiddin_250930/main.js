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

let displayCommands;
("----=== MASALA RAQAMLARI ===----\n");
"1-masala - 1\n" +
  "2-masala - 2\n" +
  "3-masala - 3\n" +
  "4-masala - 4\n" +
  "5-masala - 5\n" +
  "6-masala - 6\n" +
  "7-masala - 7\n" +
  "8-masala - 8\n" +
  "9-masala - 9\n";

console.log(displayCommands);

console.log("Masala raqamini kiriting: ");

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

    console.log("Masala raqami noto'g'ri kiritildi. Qayta urinib ko'ring.");
}
