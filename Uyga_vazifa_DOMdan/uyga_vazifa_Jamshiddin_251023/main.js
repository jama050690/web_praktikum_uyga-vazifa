//Topshiriq-1 - Talaba sinfi

// Student nomli class yarating. U quyidagi xususiyatlarga ega bo'lsin: name, age, grade.
// getInfo() nomli metod bo'lsin, u talabaning ismi, yoshi va bahosini qaytarsin. Yangi talaba
// obyektini yaratib, getInfo() metodini chaqiring.

class Student {
  constructor(name, age, grade) {
    (this.name = name), (this.age = age), (this.grade = grade);
  }
  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const yangiTalaba = new Student(`Jamshiddin`, 35, 100);
console.log(yangiTalaba.getInfo());

//Topshiriq-2 - Avtomobil sinfi

// Car nomli class yarating. Xususiyatlari: brand, model, year. getCarAge() metodi
// bo'lsin, u avtomobil nechchi yillik ekanini hisoblasin. isOldCar() metodi bo'lsin, agar
// mashina 10 yildan eski bo'lsa, "Eski mashina" aks holda "Yangi mashina" qaytarsin.

class Car {
  constructor(brand, model, year) {
    (this.brand = brand), (this.model = model), (this.year = year);
  }
  getCarAge() {
    const currentYear = new Date().getFullYear();
    const getCarAge = currentYear - this.year;
    return getCarAge;
  }
  isOldCar() {
    const carAge = this.getCarAge();
    return carAge > 10 ? "Eski mashina" : "Yangi mashina";
  }
}
const newCar = new Car("BMW", "X5", 2015);
console.log(`Mashina ${newCar.getCarAge()} yoshda.`);
console.log(newCar.isOldCar());

//Topshiriq-3 - Bank hisob raqami
// BankAccount classini yarating. Xususiyatlar: owner (hisob egasi) – public balance
// (balans) Metodlar: deposit(amount) – balansga pul qo‘shadi. withdraw(amount) –
// agar balans yetarli bo‘lsa, pul yechadi, aks holda "Yetarli mablag' yo'q" qaytaradi.
// getBalance() – balansni qaytaradi.

class BankAccount {
  constructor(owner, balance) {
    (this.owner = owner), (this.balance = balance);
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Hisobga ${amount} so'm qo'shildi. Yangi balans: ${this.balance} so'm.`;
    } else {
      return "Noto'g'ri qiymat kiritildi.";
    }
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return `Hisobdan ${amount} so'm yechildi. Qoldi balans: ${this.balance} so'm.`;
    } else {
      return "Yetarli mablag' yo'q";
    }
  }
  getBalance() {
    return `Joriy balans: ${this.balance} so'm.`;
  }
}
const account = new BankAccount("Jamshiddin", 1000000);
console.log(account.getBalance());
console.log(account.deposit(500000));
console.log(account.withdraw(300000));
console.log(account.withdraw(200000));
console.log(account.getBalance());
