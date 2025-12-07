// 9. Sequential Promise execution
// Promise'larni ketma-ket (sequential) bajarish funksiyasini yarating.
function userName(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Ismingizni kiriting");
      resolve();
    }, timeout);
  });
}

function userEmail(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Emailingizni kiriting");
      resolve();
    }, timeout);
  });
}

function userPassword(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email parolingizni kiriting");
      resolve();
    }, timeout);
  });
}

async function Work() {
  await userName(1000);
  await userEmail(1000);
  await userPassword(1000);
}

Work();
