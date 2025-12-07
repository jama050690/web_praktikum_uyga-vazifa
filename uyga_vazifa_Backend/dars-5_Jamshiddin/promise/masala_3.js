// 3. Promise zanjiri (chaining)
// Uchta Promise yarating:
// Birinchisi 1 soniyadan keyin raqam 5 ni qaytarsin
// Ikkinchisi bu raqamni 2 ga ko'paytirsin
// Uchinchisi natijani ekranga chiqarsin

new Promise((resolve) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
})
  .then((num) => {
    return num * 2;
  })
  .then((result) => {
    console.log(result);
  });
