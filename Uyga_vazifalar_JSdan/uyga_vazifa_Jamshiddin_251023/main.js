// Masala-1
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

// Masala-2;
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
