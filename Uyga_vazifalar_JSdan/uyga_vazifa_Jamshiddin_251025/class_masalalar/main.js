// Topshiriq -  1: Talaba Klassi ( oson )

// Talaba haqida ma'lumot saqlaydigan klass yarating.
// Constructor yarating (name, age, course)
// introduce() method - "Mening ismim Ali, men 20 yoshdaman"
// study() method - "Ali Frontend kursida dars o'qiyapti"
// 2 ta talaba yarating va ularning methodlarini chaqiring

console.log("Topshiriq-1");

class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
  introduce() {
    return `Mening ismim ${this.name}, men ${this.age} yoshdaman `;
  }
  study() {
    return `${this.name} ${this.course} kusrsida dars o'qiyapti`;
  }
}

let talaba = new Student("Ali", 20, "Frontend");
let talaba_2 = new Student("Vali", 23, "BackEnd");
console.log(talaba.introduce());
console.log(talaba.study());
console.log(talaba_2.introduce());
console.log(talaba_2.study());

console.log("Topshiriq-2");

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
