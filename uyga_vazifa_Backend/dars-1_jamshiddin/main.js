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
