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

// class Animals {
//   eat() {
//     console.log(`${this.name} ovqat yeydi`);
//   }
//   sleep() {
//     console.log(`${this.name} uhlaydi`);
//   }
// }
// class Dog extends Animals {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
//   bark() {
//     console.log(`${this.name} huradi vov vov vov vov`);
//   }
// }
// class Cat extends Animals {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
//   meow() {
//     console.log(`${this.name} miyovlaydi meow meow meow`);
//   }
// }
// class Bird extends Animals {
//   constructor(name) {
//     super();
//     this.name = name;
//   }

//   fly() {
//     console.log(`${this.name} uchadi osmonda`);
//   }
// }
// const dog1 = new Dog("Olapar");
// const dog2 = new Dog("Rex");
// const cat1 = new Cat("Boroqvoy");
// const cat2 = new Cat("Momiqvoy");

// const bird = new Bird("Qushcha");

// dog1.eat();
// dog1.sleep();
// dog1.bark();

// dog2.eat();
// dog2.sleep();
// dog2.bark();

// cat1.eat();
// cat1.sleep();
// cat1.meow();

// cat2.eat();
// cat2.sleep();
// cat2.meow();

// bird.eat();
// bird.sleep();
// bird.fly();

// class Product {
//   constructor(id, name, price, quantity) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }
//   update_price(new_price) {
//     this.price = new_price;
//     return `Yangi narx: ${this.price}`;
//   }
//   add_stock(amount) {
//     this.quantity += amount;
//     return `Yangi zaxira: ${this.quantity}`;
//   }
//   reduce_stock(amount) {
//     if (amount > this.quantity) return "Yetarli zaxira yo‘q";
//     this.quantity -= amount;
//     return `Qolgan zaxira: ${this.quantity}`;
//   }
//   show_info() {
//     return `Mahsulot: ${this.name}\nNarx: ${this.price} so'm\nOmborda: ${this.quantity} dona`;
//   }
// }

// class Customer {
//   constructor(name, phone, balance = 0) {
//     this.name = name;
//     this.phone = phone;
//     this.balance = balance;
//     this.purchase_history = [];
//   }
//   add_money(amount) {
//     this.balance += amount;
//     return `Balans yangilandi: ${this.balance} so'm`;
//   }
//   show_balance() {
//     return `Mijoz balansida: ${this.balance} so'm mavjud`;
//   }
//   process_sale(product, quantity) {
//     if (product.quantity < quantity) return "Omborda yetarli mahsulot yo‘q.";
//     let total_price = product.price * quantity;
//     if (quantity >= 10) {
//       const discount = total_price * 0.1;
//       total_price -= discount;
//     }
//     if (this.balance < total_price) return "Balansda yetarli mablag‘ yo‘q.";
//     product.quantity -= quantity;
//     this.balance -= total_price;
//     this.purchase_history.push({
//       product_name: product.name,
//       quantity: quantity,
//       price: product.price,
//       total: total_price,
//     });
//     return `${product.name} sotib olindi (${quantity} dona). To‘lov: ${total_price} so‘m.`;
//   }
//   calculate_total() {
//     let total = 0;
//     this.purchase_history.forEach((item) => (total += item.total));
//     return total;
//   }
//   print_receipt(shop) {
//     if (this.purchase_history.length === 0) return "Xaridlar mavjud emas.";
//     const now = new Date();
//     const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1)
//       .toString()
//       .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")} ${now
//       .getHours()
//       .toString()
//       .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
//     let receipt = "========== CHEK ==========\n";
//     receipt += `Do'kon: ${shop.name}\n`;
//     receipt += `Xaridor: ${this.name}\n`;
//     receipt += `Telefon: ${this.phone}\n`;
//     receipt += `Sana: ${formattedDate}\n`;
//     receipt += "--------------------------\n";
//     this.purchase_history.forEach((item) => {
//       receipt += `Mahsulot: ${item.product_name}\n`;
//       receipt += `Narxi: ${item.price} so'm\n`;
//       receipt += `Miqdori: ${item.quantity} dona\n`;
//       receipt += `Jami: ${item.total} so'm\n`;
//       receipt += "--------------------------\n";
//     });
//     receipt += `JAMI: ${this.calculate_total()} so'm\n`;
//     receipt += `Qolgan balans: ${this.balance} so'm\n`;
//     receipt += "==========================";
//     return receipt;
//   }
// }

// class Shop {
//   constructor(name) {
//     this.name = name;
//     this.products = [];
//     this.customers = [];
//     this.sales = [];
//     this.total_income = 0;
//   }
//   add_product(product) {
//     this.products.push(product);
//     return `${product.name} do'konga qo'shildi.`;
//   }
//   register_customer(customer) {
//     this.customers.push(customer);
//     return `${customer.name} ro'yxatga olindi.`;
//   }
//   find_product(name) {
//     const found = this.products.find(
//       (p) => p.name.toLowerCase() === name.toLowerCase()
//     );
//     if (!found) return `${name} nomli mahsulot topilmadi.`;
//     return `${found.name} — ${found.price} so'm (${found.quantity} dona omborda)`;
//   }
//   check_low_stock() {
//     const lowStock = this.products.filter((p) => p.quantity < 10);
//     if (lowStock.length === 0) return "Hamma mahsulotlar yetarli.";
//     let warning = "Quyidagi mahsulotlar 10 tadan kam:\n";
//     lowStock.forEach(
//       (p) => (warning += `${p.name}: ${p.quantity} dona qoldi.\n`)
//     );
//     return warning;
//   }
//   show_all_products() {
//     if (this.products.length === 0) return "Hozircha mahsulot yo'q.";
//     let result = "Do'kondagi mahsulotlar:\n";
//     this.products.forEach(
//       (p, i) =>
//         (result += `${i + 1}. ${p.name} — ${p.price} so'm (${
//           p.quantity
//         } dona)\n`)
//     );
//     return result;
//   }
// }

// const shop = new Shop("TechnoStore");
// const iphone = new Product(1, "iPhone 15", 15000000, 12);
// const airpods = new Product(2, "AirPods Pro", 4000000, 8);
// const customer = new Customer("Ali", "+998901234567", 200000000);
// console.log(shop.add_product(iphone));
// console.log(shop.add_product(airpods));
// console.log(shop.register_customer(customer));
// console.log(shop.find_product("iPhone 15"));
// console.log(customer.process_sale(iphone, 10));
// console.log(customer.process_sale(airpods, 2));
// console.log(shop.check_low_stock());
// console.log(customer.print_receipt(shop));
