const prompt = require("prompt-sync")();
// 11-topshiriq
// Shunday funksiya yaratingki . Funksiya argument qabul qilsin.
//  "madam" so‘zidan foydalanib, for sikl yordamida uni teskari yozib chiqing ("madam").
let teskari = "";
let soz = prompt("So'z kiriting: ");
const funTeskari = (soz) => {
  for (let i = soz.length - 1; i >= 0; i--) {
    teskari += soz[i];
  }
  return teskari;
};
let result = funTeskari(soz);
console.log(teskari);
