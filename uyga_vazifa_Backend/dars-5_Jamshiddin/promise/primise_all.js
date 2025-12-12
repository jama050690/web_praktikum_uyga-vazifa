// 1. Oddiy Promise yaratish
// Oddiy Promise yarating va uni 2 soniya kutgandan keyin "Salom, dunyo!" xabari bilan resolve qiling.
let promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello World");
  }, 2000);
});
promiseOne.then((message) => {
  console.log(message);
});

// 2. Promise bilan xato qaytarish
// Promise yarating va uni 1 soniya kutgandan keyin "Xato yuz berdi!" xabari bilan reject qiling. Keyin .catch() yordamida xatoni ushlang.

let promiseError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Xato yuz berdi");
  }, 2000);
});
promiseError.catch((message) => {
  console.log(message);
});

// 3. Promise zanjiri (chaining)
// Uchta Promise yarating:
// Birinchisi 1 soniyadan keyin raqam 5 ni qaytarsin
// Ikkinchisi bu raqamni 2 ga ko'paytirsin
// Uchinchisi natijani ekranga chiqarsin

let promiseThree = new Promise((resolve) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
})
  .then((num) => {
    return num * 2;
  })
  .then((result) => {
    console.log(result);
    return result;
  });

// // 4. Promise.all() dan foydalanish
// Uchta turli vaqtda bajariluvchi Promise yarating (1s, 2s, 3s) va ularning barchasini Promise.all() bilan kuting.
// 1s ichida bajariluvchi Promise

function allPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 1000);
  });
}
function retPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("My name's Jamshiddin");
    }, 2000);
  });
}
function resPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("I'm jinior developer");
    }, 3000);
  });
}
Promise.all([allPromise(), resPromise(), resPromise()]).then((values) => {
  console.log(values);
});

// 5. Promise.race() dan foydalanish
// Uchta Promise yarating va Promise.race() yordamida eng tez bajariliganini toping.
// Sizning kodingiz

async function posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return { name: "posts", data: await res.json() };
}
async function users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return { name: "posts", data: await res.json() };
}
async function todos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return { name: "posts", data: await res.json() };
}
Promise.race([posts(), users(), todos()]).then((result) => {
  console.log(result);
});

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
    .catch((error) => console.log(error));
}
loadUserData(7);

// 7. Retry mexanizmi
// Agar Promise xato bilan tugasa, uni 3 marta qayta urinish mexanizmini yarating.

function retryPromise(promisefn, retries = 3, delay = 2000) {
  return new Promise((resolve, reject) => {
    const retry = () => {
      promisefn()
        .then(resolve)
        .catch((error) => {
          if (retries == 3) {
            reject(error);
          } else {
            console.log(`Retry... ${retries}`);
            retries--;
            setTimeout(attempt, delay);
          }
        });
    };

    retry();
  });
}
function getData() {
  return new Promise((resolve, reject) => {
    let success = Math.random() > 0.5;
    success ? resolve("Ma'lumot olindi!") : reject("Server xatosi!");
  });
}

retryPromise(getData, 3, 1000).then(console.log).catch(console.error);
