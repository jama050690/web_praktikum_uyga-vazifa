// 2. Promise bilan xato qaytarish
// Promise yarating va uni 1 soniya kutgandan keyin "Xato yuz berdi!" xabari bilan reject qiling. Keyin .catch() yordamida xatoni ushlang.

const nPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Xato yuz berdi");
  }, 1000);
});
nPromise.catch((message) => console.info(message));
