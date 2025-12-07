// 11. Rate Limiter
// Soniyada maksimal 3 ta so'rov yuborilishini ta'minlaydigan Promise-based rate limiter yarating.
class RateLimiter {
  constructor(maxRequests, interval) {
    this.maxRequests = maxRequests;
    this.interval = interval;
    this.queue = [];
    this.available = maxRequests;

    setInterval(() => {
      this.available = this.maxRequests;
      this.processQueue();
    }, this.interval);
  }

  processQueue() {
    while (this.available > 0 && this.queue.length > 0) {
      const { promiseFn, resolve, reject } = this.queue.shift();
      this.available--;

      promiseFn().then(resolve).catch(reject);
    }
  }

  async execute(promiseFn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ promiseFn, resolve, reject });
      this.processQueue();
    });
  }
}

const limiter = new RateLimiter(3, 1000);

function fakeApiCall(id) {
  return limiter.execute(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          console.log("Finished:", id, "Time:", Date.now());
          resolve(id);
        }, 300);
      })
  );
}

for (let i = 1; i <= 9; i++) {
  fakeApiCall(i);
}

// function rateLimiter(limitPerSecond) {
//   const queue = [];
//   let available = limitPerSecond;

//   // Har 1 sekundda tokenlarni to'ldiramiz
//   setInterval(() => {
//     available = limitPerSecond;
//     processQueue();
//   }, 1000);

//   function processQueue() {
//     while (available > 0 && queue.length > 0) {
//       const { fn, resolve, reject } = queue.shift();
//       available--;

//       fn()
//         .then(resolve)
//         .catch(reject);
//     }
//   }

//   // Bu funktsiya ichiga har bir so'rov qo'yiladi
//   return function limit(fn) {
//     return new Promise((resolve, reject) => {
//       queue.push({ fn, resolve, reject });
//       processQueue();
//     });
//   };
// }

// 1 sekundda 3 ta so'rov limit qilamiz
// const limit = rateLimiter(3);

// // Test API (random vaqt bilan)
// function apiCall(id) {
//   return limit(() =>
//     new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Finished:", id, "Time:", Date.now());
//         resolve(id);
//       }, Math.random() * 500);
//     })
//   );
// }

// // 10 ta chaqiru
// for (let i = 1; i <= 10; i++) {
//   apiCall(i);
// }
