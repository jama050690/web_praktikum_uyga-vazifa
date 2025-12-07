import fs from "fs";

let name = process.argv[2];
let age = process.argv[3];

if (!name || !age) {
  console.log("Ism va yosh kiriting!");
  process.exit(0);
}
name = name.trim().toLowerCase();
name = name[0].toUpperCase() + name.slice(1);

age = Number(age);

if (isNaN(age)) {
  console.log("Yosh raqam bolishi kerak!");
  process.exit(0);
}

fs.readFile("./User_info", "utf8", (err, data) => {
  let users = [];

  if (!err) {
    try {
      users = JSON.parse(data);
    } catch (e) {
      console.log("Fayl noto‘g‘ri formatda. Yangi JSON fayl yaratildi.");
      users = [];
    }
  }

  const exists = users.some((u) => u.name === name);

  if (exists) {
    console.log(` ${name} allaqachon mavjud`);
    return;
  }

  users.push({ name, age });

  fs.writeFile("./diary.txt", JSON.stringify(users, null, 2), (err) => {
    if (err) return console.log("Yozishda xatolik:", err);

    console.log(` Yangi foydalanuvchi qoshildi: ${name}, ${age} yosh`);
    console.log(" Hozirgi foydalanuvchilar:", users);
  });
});
