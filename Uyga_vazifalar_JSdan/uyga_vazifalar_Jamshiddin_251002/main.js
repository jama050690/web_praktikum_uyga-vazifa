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

// 1 dan 30 gacha bo‘lgan sonlarning faqat juft sonlarini va ularning kvadratlarini chiqar.

function masala_6() {
  console.log("Masala 6 ...");

  let i = 1;
  let n = 30;

  while (i <= n) {
    if (i % 2 === 0) {
      console.log(i, i ** 2);
    }
    i++;
  }
}

// 1 dan 20 gacha bo‘lgan sonlardan faqat 5 ga bo‘linadiganlarini chiqar va ularni sanab ber (nechta ekanini top).

function masala_7() {
  console.log("Masala 7 ...");

  let i = 1;
  let n = 20;
  let count = 0;
  while (n >= i) {
    if (i % 5 == 0) {
      console.log(i);
      count++;
    }
    i++;
  }
  console.log("5 ga bo'linadigan sonlar: ", count);
}

// Fibonachchi sonlarini chiqar (faqat dastlabki 10 ta soni: 0, 1, 1, 2, 3, 5, 8, ...).

function masala_8() {
  console.log("Masala 8...");

  let a = 0;
  let b = 1;

  console.log(a);
  console.log(b);

  let count = 2;

  while (count < 10) {
    let fibonachchi = a + b;
    console.log(fibonachchi);

    a = b;
    b = fibonachchi;
    count++;
  }
}

// 1 dan 100 gacha bo‘lgan sonlardan 3 va 5 ga bir vaqtda bo‘linadiganlarini ekranga chiqar.

function masala_9() {
  console.log("Masala 9...");
  let n = 100;
  let i = 1;
  while (n >= i) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
    i++;
  }
}
// A va B musbat sonlar berilgan(A>B). A uzunlikdagi kesmada maksimal darajada
// B kesma joylashtirilgan.A kesmaning bo'sh qiymatini aniqlovchi programma tuzilsin.
// Ko'paytiruv va bo'luv ammalari ishlatmang.

function masala_10() {
  console.log("Masala 10...");

  let A = Number(prompt("A sonini kiriting (A > B bo'lishi kerak): "));
  let B = Number(prompt("B sonini kiriting: "));

  let qoldiq = A;

  do {
    qoldiq = qoldiq - B;
  } while (qoldiq >= B);

  if (A <= B) {
    console.log(" Xato: A soni B dan katta bo'lishi kerak!");
  } else {
    console.log("Bo'sh qism:", qoldiq);
  }
}

// A va B musbat sonlar berilgan(A>B). A uzunlikdagi kesmada
// B kesmani nechta marta joylashtirilganini aniqlovchi programma tuzilgan.
// Ko'paytiruv va bo'luv ammalari ishlatmang.
function masala_11() {
  console.log("Masala 11...");

  let A = Number(prompt("Butun son kiriting: "));
  let B = Number(prompt("Butun son kiriting: "));

  if (A <= B) {
    console.log("Xato: A soni B dan katta bo'lishi kerak!");
  } else {
    let butun = 0;
    let qoldiq = A;

    do {
      qoldiq = qoldiq - B;
      butun++;
    } while (qoldiq >= B);

    console.log("Joylahgan B kesmalar soni:", butun);
  }
}
// N va K butun musbar sonlar berilgan.Faqat ayirish va qo'shish amalarini bajarib N sonining
// K soniga bo'lganda qoldiq va butun qismini aniqlovchi programa tuzilsin.
function masala_12() {
  console.log("Masala 12...");

  let n = Number(prompt("N sonini kiriting: "));
  let k = Number(prompt("K sonini kiriting: "));

  if (n < k) {
    console.log(" n soni k dan katta yoki teng bo'lishi kerak!");
  } else {
    let butun = 0;
    let qoldiq = n;

    do {
      qoldiq = qoldiq - k;
      butun++;
    } while (qoldiq >= k);

    console.log("Butun:", butun);
    console.log("Qoldiq:", qoldiq);
  }
}

// n butun soni berilgan (n>0).Agar n soni 3 ning darajasi "3-ning darajasi",
//  aks holda "3-ning darajasi emas" degan natija chiqaruvchi programma
//  tuzilsin. Qoldiqli bo'lish va bo'lish ammalarini ishlatmang.

function masala_13() {
  console.log("Masala 13...");

  let n = Number(prompt("N sonini kiriting: "));

  if (n <= 0) {
    console.log("n musbat bo'lishi kerak");
  } else {
    let son = 1;

    while (son < n) {
      son = son * 3;
    }
    if (son === n) {
      console.log("3-ning darajasi");
    } else {
      console.log("3-ning darajasi emas");
    }
  }
}

// 2 sonining qandaydir darajasini bildiruvchi n butun soni berilgan (n>0). n=2**k. k ni aniqlovchi programma tuzilsin.

function masala_14() {
  console.log("Masala 14...");

  let n = Number(prompt("N sonini kiriting: "));

  let temp = n;
  while (temp % 2 === 0) temp /= 2;
  if (temp !== 1) {
    console.log("n 2 ning darajasi emas.");
  } else {
    let k = 0;
    while (n > 1) {
      n = n / 2;
      k++;
    }

    console.log("k =", k);
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
