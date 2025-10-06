const prompt = require("prompt-sync")();

// While bo'yicha masalalar.

//  Berilgan N sonining raqamlar yig‘indisini hisoblang.

function masala_1() {
  console.log("Masala 1 ...");
  let n = Number(prompt("Butun son kiriting"));
  let count = 0;
  let i = 0;
  while (i < n) {
    let a = n % 10;
    count += a;
    n = Math.floor(n / 10);
  }

  console.log(count);
}
// N soni berilgan uni teskari tartibda ekranga chiqring.
function masala_2() {
  console.log("Masala 2 ...");
  let n = Number(prompt("Butun son kiriting"));
  let reversed = 0;

  while (n > 0) {
    let qoldiq = n % 10;
    reversed = reversed * 10 + qoldiq;
    n = Math.floor(n / 10);
  }
  console.log("teskarisi: ", reversed);
}

//  Foydalanuvchi 1234 parolini kiritmaguncha, qayta so‘rash kerak.
// Input:
// 0000
// 9876
// 1234
// Output:
// Noto‘g‘ri parol. Qayta urinib ko‘ring.
// Noto‘g‘ri parol. Qayta urinib ko‘ring.
// Xush kelibsiz!

function masala_3() {
  console.log("Masala 3 ...");

  let parol = prompt("Parolni kiriting:");

  while (parol !== "1234") {
    console.log("Noto'g'ri parol. Qayta urinib ko'ring.");
    parol = prompt("Parolni kiriting: ");
  }

  console.log("Xush kelibsiz!");
}

//  Masala: Berilgan N sonining faktorialini hisoblang.
// Input: N = 5
// Output: 120 (chunki 5! = 5 × 4 × 3 × 2 × 1 = 120)

function masala_4() {
  console.log("Masala 4 ...");

  let n = Number(prompt("Butun son kiriting"));
  n = Math.abs(n);
  let faktorial = 1;

  while (n > 0) {
    faktorial *= n;
    n--;
  }

  console.log("Faktorial:", faktorial);
}

// Foydalanuvchidan N sonini oling. Agar u faqat 1 va o‘ziga
// bo‘linadigan tub son bo‘lsa, "Tub son" deb chiqaring, aks holda "Tub
// emas" chiqaring.
//  Input: N = 7
//  Output: "Tub son"
function masala_5() {
  console.log("Masala 5 ...");
  let n = Number(prompt("Butun son kiriting: "));

  let count = 0;
  let i = 1;

  while (i) {
    if (n % i === 0) {
      count++;
    }
    i++;
  }
  if (count === 2) {
    console.log("Tub son");
  } else {
    console.log("Tub emas");
  }
}

// Do while bo'yicha masalalar.

//   1 dan N gacha bo‘lgan sonlar kvadratini chiqarish
// input: N = 4
// Output:
// 1 -> 1, 2 -> 4, 3 -> 9, 4 -> 16

function masala_6() {
  console.log("Masala 6 ...");

  let n = Number(prompt("Butun son kiriting: "));
  let i = 1;

  do {
    console.log(i, "->", i ** 2);
    i++;
  } while (i <= n);
}

// Berilgan sonning raqamlari ko‘paytmasini hisoblash
// input: N = 234
// output: 24 (chunki 2 × 3 × 4 = 24)

function masala_7() {
  console.log("Masala 7 ...");
  let n = Number(prompt("Butun son kiriting: "));
  let kopaytma = 1;
  let i = 0;
  do {
    let a = n % 10;
    kopaytma *= a;
    n = Math.floor(n / 10);
  } while (n > 0);

  console.log("Raqamlar ko'paytmasi:", kopaytma);
}

// 1 dan N gacha bo‘lgan sonlarning toqlarini chiqarish
// input: N = 9
// output:
// 1, 3, 5, 7, 9

function masala_8() {
  console.log("Masala 8 ...");
  let n = Number(prompt("Butun son kiriting: "));
  let i = 1;
  do {
    if (i % 2 !== 0) {
      console.log(i);
    }
    i++;
  } while (i <= n);
}

// 10 dan kichik bo‘lgan eng katta sonni topish
// input: N = 56983
// output: 9

function masala_9() {
  console.log("Masala 9 ...");
  let n = Number(prompt("Butun son kiriting: "));
  let max = -1;

  do {
    let a = n % 10;
    if (a < 10 && a > max) {
      max = a;
    }
    n = Math.floor(n / 10);
  } while (n > 0);

  console.log("Eng katta raqam:", max);
}

//  Berilgan son ichida 5 raqami bor yoki yo‘qligini aniqlash
// input: N = 86941
// output: "5 raqami yo‘q"

function masala_10() {
  console.log("Masala 10 ...");
  let n = Number(prompt("Butun son kiriting: "));
  let found = false;
  do {
    let a = n % 10;
    if (a === 5) {
      found = true;
      break;
    }
    n = Math.floor(n / 10);
  } while (n > 0);

  if (found) {
    console.log("5 raqami bor");
  } else {
    console.log("5 raqami yo‘q");
  }
}

// For bo'yicha masalalar.

// 1. 1 dan N gacha bo‘lgan sonlar yig‘indisini hisoblash
// input: N = 5
// output: 15 (chunki 1 + 2 + 3 + 4 + 5 = 15)

function masala_11() {
  console.log("Masala 11 ...");
  let n = Number(prompt("Butun son kiriting: "));
  let natija = 0;
  for (let i = 1; i <= n; i++) {
    natija += i;
  }
  console.log("Yig‘indi:", natija);
}

//  Berilgan sonning bo‘luvchilarini chiqarish
// input: N = 12
// output: 1 2 3 4 6 12

function masala_12() {
  console.log("Masala 12 ...");
  let n = Number(prompt("Butun son kiriting: "));
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

// Foydalanuvchidan N ta son kiritishni so‘rash va ularning
// yig‘indisini hisoblash
// input:
// input: 3 5 7 2 4
// output: 21

function masala_13() {
  console.log("Masala 13 ...");
  let n = Number(prompt("Nechta son kiritmoqchisiz? "));
  let yigindi = 0;

  for (let i = 0; i < n; i++) {
    let son = Number(prompt("Sonni kiriting: "));
    yigindi += son;
  }

  console.log("Yig‘indi:", yigindi);
}

//  N ta sonni faqat juft bo‘lsa ekranga chiqarish
// input: 1 2 3 4 5
// output: 2 4

function masala_14() {
  console.log("Masala 14 ...");
  let n = Number(prompt("Nechta son kiritmoqchisiz? "));
  console.log("Juft sonlar:");
  for (let i = 0; i < n; i++) {
    let son = Number(prompt("Sonni kiriting: "));
    if (son % 2 === 0) {
      console.log(son);
    }
  }
}

// 1 dan N gacha bo‘lgan sonlarning kubini chiqarish
// input: N = 4
// output:
// 1 -> 1, 2 -> 8, 3 -> 27, 4 -> 64

function masala_15() {
  console.log("Masala 15 ...");
  let n = Number(prompt("Butun son kiriting: "));

  for (let i = 1; i <= n; i++) {
    console.log(i, "->", i * i * i);
  }
}

// Nested for (bonus ball uchun)

// 1. Yulduzlar bilan to‘ldirilgan kvadrat shakli
// input: N = 5
// Output: eni va bo’yiga ko’ra bir xil sondagi yulduzlar (5 x 5)

function masala_16() {
  console.log("Masala 16 ...");
  let n = Number(prompt("Butun son kiriting: "));
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// Foydalanuvchi N ta son kiritib,ularning kombinatsiyalarini chiqarish.

function masala_17() {
  console.log("Masala 17 ...");

  let a = Number(prompt("1-sonni kiriting: "));
  let b = Number(prompt("2-sonni kiriting: "));
  let c = Number(prompt("3-sonni kiriting: "));

  console.log("Kombinatsiyalar:");

  for (let i = 1; i <= 3; i++) {
    let x;
    if (i === 1) {
      x = a;
    } else if (i === 2) {
      x = b;
    } else {
      x = c;
    }

    for (let j = 1; j <= 3; j++) {
      let y;
      if (j === 1) {
        y = a;
      } else if (j === 2) {
        y = b;
      } else {
        y = c;
      }

      for (let k = 1; k <= 3; k++) {
        let z;
        if (k === 1) {
          z = a;
        } else if (k === 2) {
          z = b;
        } else {
          z = c;
        }

        console.log(x, y, z);
      }
    }
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
  "9-masala - 9\n" +
  "10-masala - 10\n" +
  "11-masala - 11\n" +
  "12-masala - 12\n" +
  "13-masala - 13\n" +
  "14-masala - 14\n" +
  "15-masala - 15\n" +
  "16-masala - 16\n" +
  "17-masala - 17\n";
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
  case 10:
    masala_10();
    break;
  case 11:
    masala_11();
    break;
  case 12:
    masala_12();
    break;
  case 13:
    masala_13();
    break;
  case 14:
    masala_14();
    break;
  case 15:
    masala_15();
    break;
  case 16:
    masala_16();
    break;
  case 17:
    masala_17();
    break;

  default:
    console.log("Masala raqami noto'g'ri kiritildi. Qayta urinib ko'ring.");
}
