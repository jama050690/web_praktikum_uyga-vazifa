const prompt = require("prompt-sync")();

//// A va B musbat sonlar berilgan(A>B). A uzunlikdagi kesmada
// B kesmani nechta marta joylashtirilganini aniqlovchi programma tuzilgan.
// Ko'paytiruv va bo'luv ammalari ishlatmang.
function masala_11(a, b) {
  let butun = 0;
  if (a <= b) {
    console.log("Xato: a soni b dan katta bo'lishi kerak!");
  } else {
    let qoldiq = a;

    do {
      qoldiq = qoldiq - b;
      butun++;
    } while (qoldiq >= b);
  }
  return butun;
}
let result = masala_11(15, 4);
console.log(result);
