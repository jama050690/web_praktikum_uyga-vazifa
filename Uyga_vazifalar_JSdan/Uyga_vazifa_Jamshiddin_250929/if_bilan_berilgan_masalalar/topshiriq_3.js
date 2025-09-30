// Butun son berilgan. Agar, berilgan son musbat bo'lsa, 1 ga oshiring, agar manfiy bo"lsa 2 ga
// kamaytiring. Agar 0 ga teng bo'lsa, 10 ni o'ziashtirsin. Hosil bo‘lgan sonni ekranga chiqaruvchi
// programma tuzilsin.

let son = 0;
if (son > 0) {
  console.log(++son);
} else if (son < 0) {
  console.log(son - 2);
} else {
  console.log((son = 10));
}
