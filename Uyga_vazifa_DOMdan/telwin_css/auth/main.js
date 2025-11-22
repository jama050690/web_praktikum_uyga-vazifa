const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const addBtn = document.getElementById("submit");

let users = [];

function add() {
  const emailText = emailInput.value.trim();
  const passwordText = passwordInput.value.trim();
  let nameInput;
  let nameText;
  const currentUrl = window.location.href;
  if (currentUrl.includes("register.html")) {
    // register
    nameInput = document.getElementById("firstName");
    nameText = nameInput.value.trim();

    if (nameText === "" || emailText === "" || passwordText === "") {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    // Email avval ro'yhatdan o'tganmi?
    const existingUser = localStorage.getItem(emailText);

    if (existingUser) {
      alert("Siz oldin ro'yhatdan o'tgansiz! Iltimos login qiling.");
      // Login sahifaga yuborish
      window.location.href = "./index.html";
      return;
    }

    const user = {
      id: users.length + 1,
      name: nameText,
      email: emailText,
      password: passwordText,
    };

    localStorage.setItem(user.email, JSON.stringify(user)); // all users
    localStorage.setItem("currentUser", JSON.stringify(user)); // active user
    let count = Number(localStorage.getItem("count"));
    count += 1;
    localStorage.setItem("count", count);
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    console.log(users);
    alert(
      `Muvaffaqtiyatli ro'yhatdan o'tganinggiz bilan tabriklayman, ${user.name}!`
    );
  } else {
    // login
    const user = JSON.parse(localStorage.getItem(emailText));
    if (user && user.password === passwordText) {
      alert(`Login muvaffaqiyatli amalga oshirildi,${user.name}!`);
      localStorage.setItem("logged_in_user", user.email);
      window.location.href = "../user_page.html";
    } else {
      let errMessage = "";
      if (user) {
        errMessage = "password xato kiritildi";
      } else {
        errMessage = `${emailText} bo'yicha foydalanuvchi topilmadi`;
      }
      console.log(errMessage);
      alert(errMessage);
    }
  }
}

function renderTasks() {}

addBtn.addEventListener("click", add);
