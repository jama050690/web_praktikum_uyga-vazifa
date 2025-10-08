const prompt = require("prompt-sync")();
// Masala_8:
// Cola objectining bonus() nomli methodi bolsin .
//  Sizda N ta butilkada Coca Cola bor, agar K ta
//  butilkani qaytib bersangiz sizga yana bitta yangi
//   Coca Cola berishadi. Siz shunday optimal strategiya
//   qilingki maximalta Coca Cola iching, shu maximal qancha
//   Coca Cola ichishingizni ayting!

const cola = {
  bonus: function (n, k) {
    let shishaCola = n;
    let boshcola = n;
    while (boshcola >= k) {
      let yangiCola = Math.floor(boshcola / k);
      shishaCola += yangiCola;
      boshcola = (boshcola % k) + yangiCola;
    }
    return shishaCola;
  },
};
let n = parseInt(
  prompt("Dastlabki Coca Cola butilkalar sonini kiriting (n): ")
);
let k = parseInt(prompt("Qaytariladigan butilkalar sonini kiriting (k): "));
const maxCola = cola.bonus(n, k);
console.log(`Siz maksimal ${maxCola} ta Coca Cola ichishingiz mumkin.`);
