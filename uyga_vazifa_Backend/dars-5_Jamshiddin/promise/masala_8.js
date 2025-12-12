// 8. Timeout bilan Promise
// Promise yarating va agar u belgilangan vaqt ichida bajarilmasa, timeout xatosi qaytarsin.

function promiseWithTimeout(promise, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject("Timeout xatosi!!!");
    }, timeout);

    promise
      .then((result) => {
        clearTimeout(timer);
        resolve(result);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}
const samplePromise = new Promise((resolve) => {
  setTimeout(() => resolve("Ma'lumot olindi"), 2000);
});

promiseWithTimeout(samplePromise, 1000).then(console.log).catch(console.error);
