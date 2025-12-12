// 7. Retry mexanizmi
// Agar Promise xato bilan tugasa, uni 3 marta qayta urinish mexanizmini yarating.

function retryPromise(promisefn, retries = 3, delay = 2000) {
  return new Promise((resolve, reject) => {
    const attempt = () => {
      promisefn()
        .then(resolve)
        .catch((err) => {
          if (retries === 3) {
            reject(err);
          } else {
            console.log(`Retry... ${retries}`);
            retries--;
            setTimeout(attempt, delay);
          }
        });
    };

    attempt();
  });
}
function getData() {
  return new Promise((resolve, reject) => {
    let success = Math.random() > 0.5;
    success ? resolve("Ma'lumot olindi!") : reject("Server xatosi!");
  });
}

retryPromise(getData, 3, 1000).then(console.log).catch(console.error);
