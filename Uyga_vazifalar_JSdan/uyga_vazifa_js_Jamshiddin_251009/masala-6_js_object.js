const prompt = require("prompt-sync")();
// Masala_6:
// 3 ta kitobning ma'lumotlarini saqlaydigan obyekt yarating.
// Har bir kitob obyekti quyidagi xususiyatlarga ega bo'lsin:
// nomi (string)
// muallif (string)
// 	nashr_yili (number)
// 	holat (boolean, "o'qilgan" yoki "o'qilmagan" holatini bildiradi)
// Obyektga shunday funksiya qo’shing , bu funksiya agar kitobning
// holati o’qilgan bo’lsa sotish mumkin emas , agar o’qilmagan bo’lsa
//  sotish mumkin natijani beradigan funksiya qoshing.

const kitob1 = {
  nomi: "Pragmatic Programmer",
  muallif: "Andrew Hunt, David Thomas",
  nashr_yili: 1999,
  holat: true, // o'qilgan
  sotishMumkinmi() {
    return this.holat ? "Sotish mumkin emas" : "Sotish mumkin";
  },
};
const kitob2 = {
  nomi: "O'tgan kunlar",
  muallif: "Abdulla Qodiriy",
  nashr_yili: 1940,

  holat: true, //o'qilgan
  sotishMumkinmi() {
    return this.holat ? "Sotish mumkin emas" : "Sotish mumkin";
  },
};
const kitob3 = {
  nomi: "somon yo'li",
  muallif: "Abdulla Qodiriy",
  nashr_yili: 1925,
  holat: true, // o'qilgan
  sotishMumkinmi() {
    return this.holat ? "Sotish mumkin emas" : "Sotish mumkin";
  },
};
console.log("Kitob 1:");
console.log(
  `kitob1: ${kitob1.nomi}, ${kitob1.muallif}, ${kitob1.nashr_yili}, ${
    kitob1.holat ? "O'qilgan" : "O'qilmagan"
  }`
);
console.log(kitob1.sotishMumkinmi());

console.log("\nKitob 2:");
console.log(
  `kitob2: ${kitob2.nomi}, ${kitob2.muallif}, ${kitob2.nashr_yili}, ${
    kitob2.holat ? "O'qilgan" : "O'qilmagan"
  }`
);
console.log(kitob2.sotishMumkinmi());
console.log(`Holat: ${kitob2.holat ? "O'qilgan" : "O'qilmagan"}`);
console.log(kitob2.sotishMumkinmi());

console.log("\nKitob 3:");
console.log(
  `kitob3: ${kitob3.nomi}, ${kitob3.muallif}, ${kitob3.nashr_yili}, ${
    kitob3.holat ? "O'qilgan" : "O'qilmagan"
  }`
);
console.log(kitob3.sotishMumkinmi());
console.log(`Nashr yili: ${kitob3.nashr_yili}`);
console.log(`Holat: ${kitob3.holat ? "O'qilgan" : "O'qilmagan"}`);
console.log(kitob3.sotishMumkinmi());
