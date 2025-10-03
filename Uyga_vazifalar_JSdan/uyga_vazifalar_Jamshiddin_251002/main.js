const prompt = require("prompt-sync")();

// 1 dan 20 gacha bo‘lgan sonlarning ko‘paytmasini hisobla.

function masala_1() {
  console.log("Masala 1 ...");
  let n = Number(prompt("Butun son kiriting: "));
  let i = 1;
  let kopaytma = 1;
  while (n > i) {
    kopaytma *= i;
    i++;
  }

  console.log(kopaytma);
}

// 1 dan 50 gacha sonlardan 3 ga bo‘linadiganlarini ekranga chiqarsin.

function masala_2() {
  console.log("Masala 2 ...");

  let i = 1;

  while (i <= 50) {
    if (i % 3 === 0) {
      console.log(i);
    }
    i++;
  }
}

// 1 dan 10 gacha bo‘lgan sonlarning kvadratlarini chiqar.
// (Masalan: 1 → 1, 2 → 4, 3 → 9, ...)

function masala_3() {
  console.log("Masala 3 ...");
  let n = 10;

  let i = 1;

  do {
    console.log(i, "->", i ** 2);
    i++;
  } while (i <= 10);
}

// Foydalanuvchi kiritgan N soni gacha bo‘lgan sonlarning yig‘indisini hisobla.

function masala_4() {
  console.log("Masala 4 ...");
  let n = Number(prompt("Butun son kiriting: "));
  let yigindi = 0;
  let i = 0;
  while (n > i) {
    yigindi = yigindi + i;
    i++;
  }
  console.log(yigindi);
}

// 10 dan 1 gacha sonlarni teskari tartibda chiqar.

function masala_5() {
  console.log("Masala 5 ...");

  let i = 10;

  while (i >= 1) {
    console.log(i);
    i--;
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

  default:
    console.log("Masala raqami noto'g'ri kiritildi. Qayta urinib ko'ring.");
}
