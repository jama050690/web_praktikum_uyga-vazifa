// Butun sonlar berilgan.Agar  berilgan son musbat bo'lsa,1 ga oshirilsin,
// aks holda o'zgartirilmasin.Hosil bo'lgan sonni ekranga chiqaruvchi programma tuzil.

let son = prompt("Butun son kiriting: ");
      if (son > 0) {
        console.log(++son);
      } else {
        console.log(son);
      }