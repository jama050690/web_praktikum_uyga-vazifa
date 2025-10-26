// Topshiriq -  7: Transport ( oson )
// 2 ta Car yarating
// 1 ta Motorcycle yarating
// Barcha methodlarni ishlatib ko'ring
// Truck (yuk mashinasi) klassini qo'shing - loadCargo() methodi bilan

class Transport {
  constructor(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;
  }
  start() {
    console.log(`${this.name} divigiti ishga tushirildi`);
  }
  move() {
    console.log(`${this.name} ${this.speed}km/soatda harakatlanmoqda `);
  }
  stop() {
    console.log(`${this.name} to'xtadi`);
  }
}
class Car extends Transport {
  honk() {
    console.log(`${this.name} signal berdi: bip bip bip`);
  }
}
class Motorcycle extends Transport {
  wheelie() {
    console.log(`${this.name} old g'ildiragini ko'tardi`);
  }
}
class Truck extends Transport {
  loadCargo(weight) {
    console.log(`${this.name} ${weight} kg yukni ortmoqda. 🚚`);
  }
}
const car1 = new Car("BMW", "Qora", 180);
const car2 = new Car("Toyota", "Qizil", 160);

const moto1 = new Motorcycle("Yamaha", "Oq", 120);

const truck1 = new Truck("Man Truck", "Yashil", 100);

car1.start();
car1.move();
car1.honk();
car1.stop();

console.log(`-----------`);

car2.start();
car2.move();
car2.honk();
car2.stop();

console.log(`-----------`);

moto1.start();
moto1.move();
moto1.wheelie();
moto1.stop();

console.log(`-----------`);

truck1.start();
truck1.move();
truck1.loadCargo(5000);
truck1.stop();
