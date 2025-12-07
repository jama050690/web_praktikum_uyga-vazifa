// 4. Promise.all() dan foydalanish
// Uchta turli vaqtda bajariluvchi Promise yarating (1s, 2s, 3s) va ularning barchasini Promise.all() bilan kuting.
// 1s ichida bajariluvchi Promise
function promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 1000);
  });
}

function promise_1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 2000);
  });
}

function promise_2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 3000);
  });
}

Promise.all([promise(), promise_1(), promise_2()]).then((values) => {
  console.log(values);
});
