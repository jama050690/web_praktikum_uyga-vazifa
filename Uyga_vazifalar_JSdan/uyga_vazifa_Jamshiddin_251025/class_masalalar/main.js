// Topshiriq -  1: Talaba Klassi ( oson )

// Talaba haqida ma'lumot saqlaydigan klass yarating.
// Constructor yarating (name, age, course)
// introduce() method - "Mening ismim Ali, men 20 yoshdaman"
// study() method - "Ali Frontend kursida dars o'qiyapti"
// 2 ta talaba yarating va ularning methodlarini chaqiring

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
