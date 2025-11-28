console.log("Masala-1");

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

console.log("------------------------------------");
console.log("Masala-2");
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

console.log("------------------------------------");
console.log("Masala-3");
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

console.log("------------------------------------");
console.log("Masala-4");
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

console.log("------------------------------------");
console.log("Masala-5");
// Masala-5:

class Transport {
  constructor(nomi, tezlik) {
    this.nomi = nomi;
    this.tezlik = tezlik;
  }
  harakatlanish() {
    console.log(`${this.nomi} ${this.tezlik} km/s tezlikda harakatlanyapdi `);
  }
}

class Avtomobil extends Transport {
  constructor(nomi, tezlik, yoqilgi_turi) {
    super(nomi, tezlik);
    this.yoqilgi_turi = yoqilgi_turi;
  }
  signal_berish() {
    console.log(`${this.nomi} signal berdi: bip bip bip`);
  }
}

class Mototsikl extends Transport {
  constructor(nomi, tezlik, gildiraklar_soni) {
    super(nomi, tezlik);
    this.gildiraklar_soni = gildiraklar_soni;
  }
  gaz_oldirish(tezlik) {
    this.tezlik = this.tezlik + tezlik;
    console.log(`${this.nomi} qo'lda tezlikni ${this.tezlik} km/s ga oshirdi`);
  }
}

const car = new Avtomobil("BMW", 60);
const moto = new Mototsikl("Yamaha", 30, 2);

car.harakatlanish();
car.signal_berish();
moto.harakatlanish();
moto.gaz_oldirish(20);

console.log("------------------------------------");
console.log("Masala-6");
// Masala-6;

class Mahsulot {
  constructor(nomi, narxi, soni) {
    this.nomi = nomi;
    this.narxi = narxi;
    this.soni = soni;
    this.valyuta = "UZS";
  }
  umumiy_qiymat() {
    console.log(
      `${this.nomi}larning umimiy qiymati: ${this.soni * this.narxi} ${
        this.valyuta
      }. `
    );
  }
}
const qovunlar = new Mahsulot("Qovun", 15000, 5);
const tarvuzlar = new Mahsulot("Tarvuz", 20000, 10);
qovunlar.umumiy_qiymat();
tarvuzlar.umumiy_qiymat();

console.log("------------------------------------");
console.log("Masala-7");

class Kitob {
  constructor(id, nomi, muallif, mavjudmi) {
    this.id = id;
    this.nomi = nomi;
    this.muallif = muallif;
    this.mavjudmi = mavjudmi;
  }
}

class Foydalanuvchi {
  constructor(id, ismi, olingan_kitoblar) {
    this.id = id;
    this.ismi = ismi;
    this.olingan_kitoblar = olingan_kitoblar;
  }
}
class Kutubxona {
  constructor(kitoblar, foydalanuvchilar) {
    this.kitoblar = kitoblar;
    this.foydalanuvchilar = foydalanuvchilar;
  }
  kitob_qoshish(kitob) {
    this.kitoblar.set(kitob.id, kitob);
    console.log(`Yangi kitob qo'shildi.Kitob nomi ${kitob.nomi}`);
  }
  kitob_berish(foydalanuvchi_id, kitob_id) {
    let kitob = this.kitoblar.get(kitob_id);
    let foydalanuvchi = this.foydalanuvchilar.get(foydalanuvchi_id);
    if (kitob == undefined) {
      console.log("Kutubxonamizda bunday kitob yo'q");
      return;
    }
    if (kitob.mavjudmi == false) {
      console.log("Kitob allaqachon olingan");
      return;
    }
    if (foydalanuvchi == undefined) {
      console.log("Bunday foydalanuvchi mavjud emas");
      return;
    }
    kitob.mavjudmi = false;
    foydalanuvchi.olingan_kitoblar.push(kitob_id);
    console.log(`${foydalanuvchi.ismi}ga ${kitob.nomi} kitobi berildi`);
  }
  kitobni_qaytarish(foydalanuvchi_id, kitob_id) {
    let kitob = this.kitoblar.get(kitob_id);
    let foydalanuvchi = this.foydalanuvchilar.get(foydalanuvchi_id);
    if (kitob == undefined) {
      console.log("Kutubxonamizda bunday kitob yo'q");
      return;
    }
    if (kitob.mavjudmi == true) {
      console.log("Kitob allaqachon qaytarilgan");
      return;
    }
    if (foydalanuvchi == undefined) {
      console.log("Bunday foydalanuvchi mavjud emas");
      return;
    }
    kitob.mavjudmi = true;
    foydalanuvchi.olingan_kitoblar.filter((id) => kitob_id != id);
    console.log(`${foydalanuvchi.ismi} ${kitob.nomi} kitobini qaytarib berdi`);
  }
  mavjud_kitoblar() {
    for (let kitob of this.kitoblar.values()) {
      console.log(
        `${kitob.id} ${kitob.nomi} ${kitob.mavjudmi ? "Bor" : "Olingan"}`
      );
    }
  }
}

let kitoblar_royhati = new Map();
const kitob_1 = new Kitob(1, "O'tkan kunlar", "Abdula Qodiriy", true);
const kitob_2 = new Kitob(2, "Ikki eshik orasida", "O'tkir Hoshimov", true);
const kitob_3 = new Kitob(3, "Ufq", "SAid Ahmad", true);
const kitob_4 = new Kitob(4, "JavaScript", "Jamshiddin Babajonov", true);

kitoblar_royhati.set(1, kitob_1);
kitoblar_royhati.set(2, kitob_2);
kitoblar_royhati.set(3, kitob_3);
kitoblar_royhati.set(4, kitob_4);

let foydalanuvchilar_royhati = new Map();
const foydalanuvchi_1 = new Foydalanuvchi(1, "Ahmad", []);
const foydalanuvchi_2 = new Foydalanuvchi(2, "Ali", []);
const foydalanuvchi_3 = new Foydalanuvchi(3, "Oybek", []);

foydalanuvchilar_royhati.set(1, foydalanuvchi_1);
foydalanuvchilar_royhati.set(2, foydalanuvchi_2);
foydalanuvchilar_royhati.set(3, foydalanuvchi_3);

let kutubxona = new Kutubxona(kitoblar_royhati, foydalanuvchilar_royhati);
// console.log(kutubxona.kitoblar);
kutubxona.kitob_berish(2, 3);
// kutubxona.kitobni_qaytarish(2, 3);
kutubxona.kitob_qoshish(
  new Kitob(
    kitoblar_royhati.size + 1,
    "JS with Jama",
    "Jumanazar va Jamshiddin",
    true
  )
);
kutubxona.mavjud_kitoblar();

console.log("------------------------------------");
console.log("Masala-8");

class Maxsulot {
  constructor(nomi, narxi) {
    this.nomi = nomi;
    this.narxi = narxi;
  }
  chegirma_hisoblash() {}
}
class Elektronika extends Maxsulot {
  constructor(nomi, narxi) {
    super(nomi, narxi);
  }
  chegirma_hisoblash() {
    return (this.narxi * 90) / 100;
  }
}
class Kiyim extends Maxsulot {
  constructor(nomi, narxi) {
    super(nomi, narxi);
  }
  chegirma_hisoblash() {
    return (this.narxi * 85) / 100;
  }
}
class Oziq_ovqat extends Maxsulot {
  constructor(nomi, narxi) {
    super(nomi, narxi);
  }
  chegirma_hisoblash() {
    return (this.narxi * 95) / 100;
  }
}
class Savatcha {
  constructor() {
    this.maxsulotlar = [];
  }
  maxsulot_qoshish(maxsulot) {
    this.maxsulotlar.push(maxsulot);
    console.log(`${maxsulot.nomi} savatchaga qo'shildi`);
  }
  umumiy_qiymat() {
    let umumiy_qiymat = this.maxsulotlar.reduce(
      (sum, maxsulot) => sum + maxsulot.narxi,
      0
    );
    let chegirma_qiymat = this.maxsulotlar.reduce(
      (sum, maxsulot) => sum + maxsulot.chegirma_hisoblash(),
      0
    );
    console.log("Maxsulotlarni umimiy qiymati: ", umumiy_qiymat);
    console.log("MAxsulotlarni chegirma qiymati: ", chegirma_qiymat);
  }
}

const elektronika = new Elektronika("Telefon", 1_500_000);
const kiyim = new Kiyim("Kastyum", 1_000_000);
const oziq_ovqat = new Oziq_ovqat("Olma", 50_000);
const savatcha = new Savatcha();
savatcha.maxsulot_qoshish(elektronika);
savatcha.maxsulot_qoshish(kiyim);
savatcha.maxsulot_qoshish(oziq_ovqat);
savatcha.umumiy_qiymat();

console.log("------------------------------------");
console.log("Masala-9");
class Xodim {
  #ismi;
  #ish_malakasi;

  constructor(ismi, ish_malakasi) {
    this.#ismi = ismi;
    this.#ish_malakasi = ish_malakasi;
  }

  maosh_hisoblash() {
    console.log("Bu metod override qilinishi kerak!");
  }
}

class Dasturchi extends Xodim {
  #soatlik_tolov;
  #ishlangan_soat;
  constructor(ismi, ish_malakasi, soatlik_tolov, ishlangan_soat) {
    super(ismi, ish_malakasi);
    this.#soatlik_tolov = soatlik_tolov;
    this.#ishlangan_soat = ishlangan_soat;
  }
  maosh_hisoblash() {
    return this.#soatlik_tolov * this.#ishlangan_soat;
  }
}
class Dizayner extends Xodim {
  #oylik_maosh;
  #bonus;
  constructor(ismi, ish_malakasi, oylik_maosh, bonus) {
    super(ismi, ish_malakasi);
    this.#oylik_maosh = oylik_maosh;
    this.#bonus = bonus;
  }
  maosh_hisoblash() {
    return this.#oylik_maosh + this.#bonus;
  }
}
class Menejer extends Xodim {
  #asosiy_maosh;
  #jamoa_bonusi;
  constructor(ismi, ish_malakasi, asosiy_maosh, jamoa_bonusi) {
    super(ismi, ish_malakasi);
    this.#asosiy_maosh = asosiy_maosh;
    this.#jamoa_bonusi = jamoa_bonusi;
  }
  maosh_hisoblash() {
    return this.#asosiy_maosh + this.#jamoa_bonusi;
  }
}
class Kompaniya {
  constructor() {
    this.xodimlar = [];
  }

  qosh(xodim) {
    this.xodimlar.push(xodim);
  }

  umumiy_maosh() {
    return this.xodimlar.reduce((sum, x) => sum + x.maosh_hisoblash(), 0);
  }
}

const dasturchi = new Dasturchi("Bekzod", "Senior", 10_000, 176);
const dizayner = new Dizayner("Ahmad", "Middle", 9_500_000, 1_000_000);
const menejer = new Menejer("Anvar", "Senior", 10_000_000, 2_000_000);

console.log("Dasturchi  maoshi:", dasturchi.maosh_hisoblash());
console.log("Dizayner maoshi:", dizayner.maosh_hisoblash());
console.log("Menejer maoshi:", menejer.maosh_hisoblash());

const komp = new Kompaniya();
komp.qosh(dasturchi);
komp.qosh(dizayner);
komp.qosh(menejer);

console.log("Kompaniya umumiy maoshi:", komp.umumiy_maosh());

console.log("------------------------------------");
console.log("Masala-10");

class Hayvonlar {
  constructor(ismi, yoshi) {
    this.ismi = ismi;
    this.yoshi = yoshi;
  }
  ovoz_chiqarish() {}
}
class It extends Hayvonlar {
  constructor(ismi, yoshi) {
    super(ismi, yoshi);
  }
  ovoz_chiqarish() {
    console.log(
      `Ismi: ${this.ismi} yoshi: ${this.yoshi} huradi: vov vov vov vov`
    );
  }
}
class Mushuk extends Hayvonlar {
  constructor(ismi, yoshi) {
    super(ismi, yoshi);
  }
  ovoz_chiqarish() {
    console.log(
      ` Ismi: ${this.ismi} yoshi: ${this.yoshi} miyovlaydi: meow meow meow`
    );
  }
}
class Qush extends Hayvonlar {
  constructor(ismi, yoshi) {
    super(ismi, yoshi);
  }

  ovoz_chiqarish() {
    console.log(`Ismi: ${this.ismi} yoshi: ${this.yoshi} ovozi:chi chi chi `);
  }
}

const it = new It("Rex", 4);
const mushuk = new Mushuk("Baroqvoy", 5);
const qush = new Qush("Qushcha", 7);

it.ovoz_chiqarish();
mushuk.ovoz_chiqarish();
qush.ovoz_chiqarish();

console.log("------------------------------------");
console.log("Masala-11");

class Shakl {
  constructor(rang) {
    this.rang = rang;
  }

  malumot() {
    console.log("Bu metod override qilinadi");
  }
  yuza_hisoblash() {
    console.log("Bu metod override qilinadi");
  }
}
class Doira extends Shakl {
  constructor(rang, radius) {
    super(rang);
    this.radius = radius;
  }
  yuza_hisoblash() {
    return Math.PI * this.radius ** 2;
  }
  malumot() {
    return `Doira rangi ${this.rang} radusi ${
      this.radius
    } yuzasi ${this.yuza_hisoblash()} `;
  }
}
class Kvadrat extends Shakl {
  constructor(rang, tomon) {
    super(rang);
    this.tomon = tomon;
  }
  yuza_hisoblash() {
    return this.tomon ** 2;
  }
  malumot() {
    return `Kvadratni rangi ${this.rang} tomoni ${
      this.tomon
    } yuzasi ${this.yuza_hisoblash()} `;
  }
}
class Uchburchak extends Shakl {
  constructor(rang, a, b) {
    super(rang);
    this.a = a;
    this.b = b;
  }
  yuza_hisoblash() {
    return (this.a * this.b) / 2;
  }
  malumot() {
    return `Uchburchani rangi ${this.rang} tomon ${this.a} ${
      this.b
    } yuzasi ${this.yuza_hisoblash()}`;
  }
}
const doira = new Doira("qora", 30);
const kvadrat = new Kvadrat("qizil", 20);
const uchburchak = new Uchburchak("yashil", 5, 6);
console.log(doira.malumot());
console.log(kvadrat.malumot());
console.log(uchburchak.malumot());

console.log("------------------------------------");
console.log("Masala-12");

class Inson {
  constructor(ismi, yoshi) {
    this.ismi = ismi;
    this.yoshi = yoshi;
  }
  tanishuv() {
    return `Mening ismim ${this.ismi}, yoshim ${this.yoshi}da.`;
  }
}

class Student extends Inson {
  constructor(ismi, yoshi, guruh, baholar) {
    super(ismi, yoshi);
    this.guruh = guruh;
    this.baholar = baholar;
  }

  tanishuv() {
    return `Mening ismim ${this.ismi}, yoshim ${this.yoshi}da. Men Najot Ta'limning ${this.guruh}da ${this.baholar} ga o'qiyapman `;
  }
}
class Oʻqituvchi extends Inson {
  constructor(ismi, yoshi, fan, tajriba) {
    super(ismi, yoshi);
    this.fan = fan;
    this.tajriba = tajriba;
  }

  tanishuv() {
    return `Mening ismim ${this.ismi}, yoshim ${this.yoshi}da. Men Najot Ta'limda ${this.fan}dan dars beraman va men ${this.tajriba} malakali ustozman `;
  }
}
class Ishchi extends Inson {
  constructor(ismi, yoshi, lavozim, maosh) {
    super(ismi, yoshi);
    this.lavozim = lavozim;
    this.maosh = maosh;
  }

  tanishuv() {
    return `Mening ismim ${this.ismi}, yoshim ${this.yoshi}da. Men Najot Ta'limda ${this.lavozim} lavozimida ishlayman,oyiga ${this.maosh} maosh olaman `;
  }
}
const inson = new Inson("Anvar", 24);
const student = new Student("Jamshiddin", 35, "Wep-praktikum: N4", 80 + "ball");
const ustoz = new Oʻqituvchi("Muhammadxon", 31, "Backend", "Senior");
const ishchi = new Ishchi("Bekzod", 28, "Menejer", 8_000_000);

console.log(inson.tanishuv());
console.log(student.tanishuv());
console.log(ustoz.tanishuv());
console.log(ishchi.tanishuv());
