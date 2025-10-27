console.log("----------------------");
console.log("Topshiriq-1:");

class Animals {
  constructor(name, voise) {
    (this.name = name), (this.voise = voise);
  }
  #ovoz() {
    return `Bu hayvon: ${this.name} shunday ovoz chiqadi${this.voise}`;
  }
  #run() {
    return `Bu hayvon; ${this.name} viiiiiish `;
  }
}
class Cat extends Animals {
  jump() {
    return `Bu havyon: ${this.name}`;
  }
}
class Dog extends Animals {
  voise2() {
    return `Bu hayvon: ${this.name} vov vov vov `;
  }
}

let cat = new Cat(`Baraqvoy, mivoy miyov`);
let dog = new Dog(`Rex`);
console.log(cat.jump(3));
console.log(dog.voise2());

console.log("----------------------");
console.log("Topshiriq-2:");

/**Texnologiyalar
Technology (ota class) yarating. Xususiyatlari: brand, price.
Computer (farzand class) yarating, u Technology dan meros olsin va
qo‘shimcha processor xususiyatiga ega bo‘lsin.
Laptop (farzand class) yarating, u Computer dan meros olsin va
qo‘shimcha batteryLife xususiyatiga ega bo‘lsin.
Har bir classda getInfo() metodini yozing, u mos ravishda to‘liq
ma’lumot qaytarsin */

class Technology {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
  getInfo() {
    return ` Bu ${this.brand} texnologiya bo'lib uning narxi ${this.price} dir`;
  }
}
class Computer extends Technology {
  constructor(brand, price, processor) {
    super(brand, price);
    this.processor = processor;
  }
  getInfo() {
    return `Bu Compyuter ${this.brand} nomli bo'lib uning narxi ${this.price} va unda ${this.processor} bor`;
  }
}
class Laptop extends Computer {
  constructor(brand, price, processor, batterlife) {
    super(brand, price, processor);
    this.batterlife = batterlife;
  }
  getInfo() {
    return `Bu Laptop ${this.brand} nomli bo'lib uning narxi ${this.price} va unda ${this.processor} va unda yana ${this.batterlife}bor`;
  }
}
let tehnologiya = new Technology("Macbook", 15000000 + "so'm");
let computer = new Computer("Intel i7");
let laptop = new Laptop(30000);

console.log(tehnologiya.getInfo());
console.log(computer.getInfo());
console.log(laptop.getInfo());

console.log("----------------------");
console.log("Topshiriq-3:");

/** Vehicle (ota class) yarating. Xususiyatlari: name, speed.
move() metodi bo‘lsin, u har bir transport harakatini bildirsin (masalan,
"Transport harakatlanmoqda").
Car (farzand class) yarating, u Vehicle dan meros olsin va move() metodini
override qilsin ("Mashina yo‘lda harakatlanmoqda").
Boat (farzand class) yarating, u Vehicle dan meros olsin va move() metodini
override qilsin ("Kema suvda harakatlanmoqda").
Airplane (farzand class) yarating, u Vehicle dan meros olsin va move()
metodini override qilsin ("Samolyot havoda uchmoqda").
Har bir transport obyektini yaratib, move() metodini chaqiring.
move() methodi har bir classda o’ziga xos ishlashi zarur.*/

class Vehicle {
  constructor(name, speed) {
    (this.name = name), (this.speed = speed);
  }
  move() {
    return `Transport ${this.name} ${this.speed} km/soatda harakatlanmoqda`;
  }
}
class Car extends Vehicle {
  constructor(name, speed) {
    super(name, speed);
  }
  move() {
    return `Mashina ${this.name} yo'lda ${this.speed} km/soatda harakatlanmoqda`;
  }
}
class Boat extends Vehicle {
  constructor(name, speed) {
    super(name, speed);
  }
  move() {
    return `Kema ${this.name} suvda ${this.speed} km/soatda harakatlanmoqda`;
  }
}
class Airplane extends Vehicle {
  constructor(name, speed) {
    super(name, speed);
  }
  move() {
    return `Samolyot ${this.name} Havoda ${this.speed} km/soatda harakatlanmoqda`;
  }
}
let transport = new Vehicle("Transport vositasi", 200);
let car = new Car("BMW", 180);
let boat = new Boat("Titanic", 60);
let plane = new Airplane("Boeing 777", 350);

console.log(transport.move());
console.log(car.move());
console.log(boat.move());
console.log(plane.move());
