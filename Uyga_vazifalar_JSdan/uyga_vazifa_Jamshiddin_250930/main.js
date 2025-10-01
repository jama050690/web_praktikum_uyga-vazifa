// k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.

const prompt = require("prompt-sync")();

function masala_1() {
  console.log("Masala 1...");
  let k = Number(prompt("Time(second) creating"));
  let n = Number(prompt("Time(second) creating"));

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

const prompt = require("prompt-sync")();

function masala_2() {
  console.log("Masala 2...");
  let a = Number(prompt("Time(second) creating"));
  let b = Number(prompt("Time(second) creating"));

  k = Math.abs(k);
  for (let i = 1; i <= k; i++) {
    if (b > a) {
      console.log(k);
    } else {
      console.log(b > a, "ni kiriting");
    }
  }
}

let displayCommands;
"----=== MASALA RAQAMLARI ===----\n" + "1-masala - 1\n";
"1-masala - 1\n" + "2-masala - 2\n";

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

    break;
    //   case n:
    //     masala_n();
    //     break;
    console.log("Masala raqami noto'g'ri kiritildi. Qayta urinib ko'ring.");
}
