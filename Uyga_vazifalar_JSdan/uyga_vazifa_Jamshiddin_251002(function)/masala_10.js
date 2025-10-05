const prompt = require("prompt-sync")();

// A va B musbat sonlar berilgan(A>B). A uzunlikdagi kesmada maksimal darajada
// B kesma joylashtirilgan.A kesmaning bo'sh qiymatini aniqlovchi programma tuzilsin.
// Ko'paytiruv va bo'luv ammalari ishlatmang.

function masala_10(a, b) {
  let qoldiq = a;

  do {
    qoldiq = qoldiq - b;
  } while (qoldiq >= b);

  if (a <= b) {
    console.log(" Xato: a soni b dan katta bo'lishi kerak!");
  } else {
    console.log("qoldiq: ");
  }
  return qoldiq;
}
let result = masala_10(12, 5);
console.log(result);
