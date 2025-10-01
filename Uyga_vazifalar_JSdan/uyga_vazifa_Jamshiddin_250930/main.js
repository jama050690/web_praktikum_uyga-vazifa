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

let displayCommands;
("----=== MASALA RAQAMLARI ===----\n");
"1-masala - 1\n" + "2-masala - 2\n" + "3-masala - 3\n" + "4-masala - 4\n";

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

    break;
    //   case n:
    //     masala_n();
    //     break;
    console.log("Masala raqami noto'g'ri kiritildi. Qayta urinib ko'ring.");
}
