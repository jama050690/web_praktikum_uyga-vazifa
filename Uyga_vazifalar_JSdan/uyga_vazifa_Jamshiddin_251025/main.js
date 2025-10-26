//Topshiriq - 1: Web praktikum o’quvchilar ma'lumotlar bazasi

// Talabalar haqida ma'lumotlarni saqlaydigan Map yarating:
// 3 ta talaba qo'shing (id ni key, object ni value sifatida)
// Har bir talaba: {name, age, course, grade} ga ega
// Barcha talabalarni console ga chiqaring
// Bitta talabani id orqali toping
// Bitta talabani o'chiring

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

console.log("BArcha talabalar: ");
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

let shop = new Map();

shop.set("PROD001", {
  name: "Notebook",
  price: 135000 + "so'm",
  stock: 10 + "ta",
  category: "Macbook",
});
shop.set("PROD002", {
  name: "Smartphone",
  price: 95000 + "so'm",
  stock: 8 + "ta",
  category: "IPhone",
});
shop.set("PROD003", {
  name: "Keyboard",
  price: 100000 + "so'm",
  stock: 11 + "ta",
  category: "Accessories",
});
shop.set("PROD004", {
  name: "HeadPhones",
  price: 120000 + "so'm",
  stock: 15 + "ta",
  category: "Accessories",
});
shop.set("PROD005", {
  name: "Mouse",
  price: 80000 + "so'm",
  stock: 12 + "ta",
  category: "Accessories",
});
console.log("BArcha mahsulotlar nomlar(keys()yordamida): ");
for (let key of shop.keys()) {
  console.log(` ${key} ${shop.get(key).name}`);
}

console.log("Barcha mahsolot soni: ", shop.size);
const checkCode = "PROD003";
console.log(
  ` ${checkCode} mavjudmi?,
  ${shop.has(checkCode) ? "Ha, mavjud" : "Yo'q"}`
);

for (let key of shop.keys()) {
  console.log(`${key} ${shop.get(key).name} ${shop.get(key).price}`);
}
