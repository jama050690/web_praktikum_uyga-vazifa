// Alisher chet elga dam olishga bormoqchi. Safar uchun ketadigan xarajatni internetdagi saytlardan qidirib chiqib, quyidagi ro’yxatda berilgan ma’lumotlarni topdi. Ularning ba’zilari AQSh dollarida ko’rsatilgan bo’lsa, ba’zilari yevroda berilgan.

// - Borish-kelish samolyot bileti - $500
// - Mehmonxona to’lovi (to’liq safar davomiyligi uchun) - $250
// - Muzey va ko’ngilochar joylar uchun - 120 yevro

// $1 = 12000.34 so’m

// 1 yevro = 13354.03 so’m

// Tuzilishi kerak bo’lgan dastur quyidagi ko’rinishda ishlaydi:

// 1. Alisher o’zida necha pul bor ekanligini so’mda prompt orqali kiritadi.

// 2. Xarajatlar dollar va yevrodan so’mga o’tkaziladi.

// 3. Alisherda yetarlicha pul bo’lsa, console.log da “Oq yo’l, Alisher!” xabari chiqadi.

// 4. Alisherda yetarlicha pul bo’lmasa, console.log da “Alisher, ozgina sabr qilish kerak bo’lar ekan.” xabari chiqadi.

// Pseudo kod:

// 1. Promptdan kelgan so'm qiymatni o'zgaruvchiga saqlaymiz
// 2. Safar harajatlarini so'mga alishtiramiz
// 3. Alisherning pulidan umumiy harajatlarni ayiramiz
// 4. chiqqan natijani 0 dan katta yoki kichikligini tekshiramiz. Agar katta bo'lsa console.log ichiga Oq yo'l, kichik bo'lsa "Alisher, ozgina sabr qilish kerak bo’lar ekan" yozuvini chiqaramiz.

const prompt = require("prompt-sync")();

let money = prompt("Butun son kiriting: ");
let a = Number(money);

let ticketAmount = 500;
let hotelAmount = 250;
let museumAmount = 120;
let dollarRate = 12000;
let euroRate = 14354;

let sum = (ticketAmount + hotelAmount) * dollarRate + euroRate * museumAmount;
console.log(sum);

if (a > sum) {
  console.log("Oq yo'l, Alisher!");
} else {
  console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
}
