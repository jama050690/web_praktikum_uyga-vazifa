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
