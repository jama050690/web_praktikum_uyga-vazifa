// Classga oid masalalar
// Masala-1
class Talaba {
  constructor(ism, familya, yosh, guruh) {
    this.name = ism;
    this.surname = familya;
    this.age = yosh;
    this.group = guruh;
  }

  info() {
    return `Talabaning ismi ${this.name}, familyasi ${this.surname}, yoshi ${this.age}, guruhi ${this.group}`;
  }
}

const talaba = new Talaba("Jamshiddin", "Babajonov", 35, "Web praktikum:n4");
console.log(talaba.info());

// Masala-2
class Culculator {
  add(a, b) {
    return a + b;
  }
  minus(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divided(a, b) {
    if (b === 0) {
      return "Soni 0 bo'lsa cheksizlik bo'ladi(infinity)";
    }
    return a / b;
  }
}
const culculator = new Culculator();
console.log(culculator.add(3, 6));
console.log(culculator.minus(8, 6));
console.log(culculator.multiply(3, 6));
console.log(culculator.divided(6, 0));

// Masala-3
class Book {
  constructor(nomi, muallifi, sahifallar_soni) {
    this.name = nomi;
    this.writter = muallifi;
    this.allpagenumber = sahifallar_soni;
  }

  info_Book() {
    return `Kitob nomi: ${this.name}, muallifi: ${this.writter}, sahifalari: ${this.allpagenumber}`;
  }
}

const book = new Book("Mukammal Dasturlash 2", "Javlon Abdullo", 296);

console.log(book.info_Book());

// Masala-4
class Bankhisobi {
  constructor(hisob_raqami, egasini_ismi, balans) {
    this.hisob_raqami = hisob_raqami;
    this.hisob_egasi = egasini_ismi;
    this.balans = balans;
  }

  pul_qoshish(summa) {
    if (summa > 0) {
      this.balans += summa;
      return `Hisobga ${summa} so'm qo'shildi.`;
    } else {
      return `Hisob faol emas:`;
    }
  }

  pul_yechish(summa) {
    if (summa <= this.balans) {
      this.balans -= summa;
      return `Hisobdan ${summa} so'm yechildi. Qolgan balans: ${this.balans} so'm.`;
    } else {
      return "Yetarli mablag' yo'q";
    }
  }

  MyBalance() {
    return `Hurmatli ${this.hisob_egasi}, hisobingizda: ${this.balans} so'm mavjud.`;
  }
}

const bankHisobi = new Bankhisobi(2511270090050601, "Jamshiddin", 100000);

console.log(bankHisobi.MyBalance());
console.log(bankHisobi.pul_qoshish(500000));
console.log(bankHisobi.pul_yechish(300000));
console.log(bankHisobi.MyBalance());
