//Topshiriq - 1: Web praktikum o’quvchilar ma'lumotlar bazasi

// Talabalar haqida ma'lumotlarni saqlaydigan Map yarating:
// 3 ta talaba qo'shing (id ni key, object ni value sifatida)
// Har bir talaba: {name, age, course, grade} ga ega
// Barcha talabalarni console ga chiqaring
// Bitta talabani id orqali toping
// Bitta talabani o'chiring

console.log("Topshiriq-1\n");

let students = new Map();
students.set(1, {
  name: "Ahmad",
  age: 20,
  course: "Wep praktikum",
  grade: "A",
});
students.set(2, {
  name: "Laziz",
  age: 22,
  course: "Wep praktikum",
  grade: "B",
});
students.set(3, {
  name: "Jamshiddin",
  age: 35,
  course: "Wep praktikum",
  grade: "C",
});

console.log("Barcha talabalar: ");
for (let [id, student] of students) {
  console.log(`ID: ${id}`, student);
}

const searchId = 2;
if (students.has(searchId)) {
  console.log(`\nID ${searchId} bilan talaba topildi:`, students.get(searchId));
} else {
  console.log(`\nID ${searchId} bilan talaba topilmadi`);
}

const deleteId = 1;
students.delete(deleteId);
console.log(`\nID ${deleteId} dagi talaba o'chirildi.`);

console.log("\nQolgan talabalar:");
for (let [id, student] of students) {
  console.log(`ID: ${id}`, student);
}

//Topshiriq - 2:  Mahsulotlar Savdo Tizimi
// Online do'kon uchun mahsulotlar Map ini yarating:
// Kamida 5 ta mahsulot qo'shing
// Key sifatida mahsulot kodi (masalan: "PROD001")
// Value: {name, price, stock, category}
// Barcha mahsulot nomlarini chiqaring (keys() dan foydalaning)
// Jami mahsulotlar sonini toping (size)
// Ma'lum bir mahsulot mavjudligini tekshiring (has())
// Barcha mahsulotlar va narxlarini for loop bilan chiqaring

console.log("Topshiriq-\n");

let shop = new Map();
const prods = [
  {
    name: "Notebook",
    price: 135000,
    stock: 10,
    category: "Macbook",
    currency: "UZS",
  },
  {
    name: "Smartphone",
    price: 95000,
    stock: 8,
    category: "IPhone",
    currency: "UZS",
  },
  {
    name: "Keyboard",
    price: 100000,
    stock: 11,
    category: "Accessories",
    currency: "UZS",
  },
  {
    name: "HeadPhones",
    price: 120000,
    stock: 15,
    category: "Accessories",
    currency: "UZS",
  },
  {
    name: "Mouse",
    price: 80000,
    stock: 12,
    category: "Accessories",
    currency: "UZS",
  },
];

prods.forEach((item, index) => {
  shop.set("PROD" + index, item);
});
console.log(shop);

console.log("Barcha mahsulotlar nomlar(keys()yordamida): ");
for (let key of shop.keys()) {
  console.log(` ${key} ${shop.get(key).name}`);
}

console.log("Barcha mahsolot soni: ", shop.size, "ta");
const checkCode = "PROD3";
console.log(
  ` ${checkCode} mavjudmi?,
  ${shop.has(checkCode) ? "Ha, mavjud" : "Yo'q"}`
);

for (let key of shop.keys()) {
  const prod = shop.get(key);
  console.log(`${key} ${prod.name} ${prod.price} ${prod.currency}\n`);
}

// Topshiriq - 3: Funksiyalarni Map da Saqlash
// Turli matematik operatsiyalarni Map da saqlang:

// Key: operatsiya nomi ("add", "subtract", "multiply", "divide")
// Value: mos funksiya
// Map yarating va 4 ta operatsiyani qo'shing
// Foydalanuvchidan operatsiya nomini va 2 ta son oling
// Kerakli funksiyani Map dan olib, natijani hisoblang

console.log("Topshiriq-3\n");
const prompt = require("prompt-sync")();
let amarmetikAmalaar = new Map();

amarmetikAmalaar.set("add", (a, b) => a + b);
amarmetikAmalaar.set("subtract", (a, b) => a - b);
amarmetikAmalaar.set("multiply", (a, b) => a * b);
amarmetikAmalaar.set("divide", (a, b) =>
  b != 0 ? a / b : "Maxrajda 0 bo`lishi mumkin emas."
);

const opName = prompt(
  "Operatsiyani kiriting (add, subtract, multiply, divide):"
);
if (!amarmetikAmalaar.has(opName)) {
  console.log("Operatsiya nomi xato kiritildi. Qayta urinib ko'ring.");
  return;
}

const a = Number(prompt("1-sonni kiriting:"));
const b = Number(prompt("2-sonni kiriting:"));

const operation = amarmetikAmalaar.get(opName);

const result = operation(a, b);
console.log("Natija:", result);
