// 1. Oddiy Promise yaratish
// Oddiy Promise yarating va uni 2 soniya kutgandan keyin "Salom, dunyo!" xabari bilan resolve qiling.

const nPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Salom Dunyo");
  }, 2000);
});
nPromise.then((message) => console.info(message));
