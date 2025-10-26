// Topshiriq -  6: Hayvonlar ( oson )

// Kodni yozing
// 2 ta Dog va 2 ta Cat yarating
// Barcha methodlarni (eat, sleep, bark, meow) chaqiring
// Bird klassini qo'shing (fly() methodi bilan)
class Animals {
  eat() {
    console.log(`${this.name} ovqat yeydi`);
  }
  sleep() {
    console.log(`${this.name} uhlaydi`);
  }
}
class Dog extends Animals {
  constructor(name) {
    super();
    this.name = name;
  }
  bark() {
    console.log(`${this.name} vov vov vov vov`);
  }
}
class Cat extends Animals {
  constructor(name) {
    super();
    this.name = name;
  }
  meow() {
    console.log(`${this.name} meow meow meow`);
  }
}
class Bird extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }

  fly() {
    console.log(`${this.name} uchadi osmonda`);
  }
}
const dog1 = new Dog("Olapar");
const dog2 = new Dog("Rex");
const cat1 = new Cat("Boroqvoy");
const cat2 = new Cat("Momiqvoy");

const bird1 = new Bird("Qushcha");

dog1.eat();
dog1.sleep();
dog1.bark();

dog2.eat();
dog2.sleep();
dog2.bark();

cat1.eat();
cat1.sleep();
cat1.meow();

cat2.eat();
cat2.sleep();
cat2.meow();

bird1.eat();
bird1.sleep();
bird1.fly();
