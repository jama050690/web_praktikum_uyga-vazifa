// Topshiriq - 2: Kitob Klassi ( oson )
// Kitob haqida ma'lumot saqlaydigan klass.
// Kitob ma'lumotlarini saqlang
// getInfo() - "Sarlavha: ..., Muallif: ..., Sahifalar: ..."
// markAsRead() - isRead ni true ga o'zgartirsin
// 3 ta kitob yarating va barcha methodlarni sinab ko'ring

class Kitob {
  constructor(sarlavha, muallif, sahifalar) {
    this.sarlavha = sarlavha;
    this.muallif = muallif;
    this.sahifalar = sahifalar;
    this.isRead = false;
  }
  getInfo() {
    return `Sarlovha: ${this.sarlavha}. Muallif: ${this.muallif}. Sahifalar: ${this.sahifalar}`;
  }
  markAsRead() {
    this.isRead = true;
  }
}
let kitob_1 = new Kitob("Ikki eshik orasida", "Abdulla Qahhor", 400);
console.log(kitob_1.getInfo(), kitob_1.isRead ? "O'qilgan" : "O'qilmagan");
kitob_1.markAsRead();
console.log(kitob_1.isRead ? "O'qilgan" : "O'qilmagan");

let kitob_2 = new Kitob("Navoiy", "Oybek", 398);
console.log(kitob_2.getInfo(), kitob_2.isRead ? "O'qilgan" : "O'qilmagan");
kitob_2.markAsRead();
console.log(kitob_2.isRead ? "O'qilgan" : "O'qilmagan");

let kitob_3 = new Kitob("UFQ", "Said Ahmad", 411);
console.log(kitob_3.getInfo(), kitob_3.isRead ? "O'qilgan" : "O'qilmagan");
kitob_3.markAsRead();
console.log(kitob_3.isRead ? "O'qilgan" : "O'qilmagan");
