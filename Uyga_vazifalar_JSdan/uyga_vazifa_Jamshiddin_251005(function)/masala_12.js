const prompt = require("prompt-sync")();

// N va K butun musbat sonlar berilgan.Faqat ayirish va qo'shish amalarini bajarib N sonining
// K soniga bo'lganda qoldiq va butun qismini aniqlovchi programa tuzilsin.
function masala_12(n, k) {
  let butun = 0;
  let qoldiq = n;
  if (n < k) {
    console.log(" n soni k dan katta yoki teng bo'lishi kerak!");
  } else {
    do {
      qoldiq = qoldiq - k;
      butun++;
    } while (qoldiq >= k);

    console.log("Butun:", butun);
    console.log("Qoldiq:", qoldiq);
  }
  return butun, qoldiq;
}
let result = masala_12(19, 4);
