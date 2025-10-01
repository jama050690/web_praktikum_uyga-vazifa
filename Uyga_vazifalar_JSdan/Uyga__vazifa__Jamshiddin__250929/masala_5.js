// Bir o’zgaruvchiga o’zingizni yoshingizni qiymat sifatida bering
// Agar sizning yoshingiz 18 dan yoqorida bo’sa “Sizda avtotransport vositasini boshqarish huquqiga ega bolasiz”  degan matn console ga chiqarilsin.

// Agar 18 da bo’lsangiz “ avto maktabda o’qishingiz mumkin”  yozuvi console da chiqsin
// Agar 18 dan kichik bolsa “ siz avto transport boshqaruvga ruxsat beruvchi guvohnoma olishga huquqingiz mavjud emas”  yozuvi console da chiqsin

const prompt = require("prompt-sync")();

let age = 35;

if (age > 18) {
  console.log("Sizda avtotransport vositasini boshqarish huquqiga ega bolasiz");
} else if ((age = 18)) {
  console.log("Avto maktabda o’qishingiz mumkin");
} else {
  console.log(
    "siz avto transport boshqaruvga ruxsat beruvchi guvohnoma olishga huquqingiz mavjud emas"
  );
}
