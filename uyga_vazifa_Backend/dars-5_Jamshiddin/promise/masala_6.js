// 6. Ma'lumot yuklash simulyatsiyasi
// Foydalanuvchi ma'lumotlarini server'dan yuklash imitatsiyasini yarating.
// Agar user ID juft bo'lsa, muvaffaqiyatli ma'lumot qaytaring, aks holda xato qaytaring.

function loadUserData(userId) {
  return new Promise((resolve, reject) => {
    console.log("Yuklanmoqda...");

    setTimeout(() => {
      if (userId % 2 === 0) {
        resolve(`Success: User ${userId} ma'lumotlari yuklandi`);
      } else {
        reject(`Error: User ${userId} topilmadi`);
      }
    }, 1000);
  })
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}
loadUserData(6);
