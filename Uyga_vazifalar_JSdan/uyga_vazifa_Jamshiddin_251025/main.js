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
