const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const registerBtn = document.getElementById("register_btn");
const loginBtn = document.getElementById("login_btn");

let users = [];

// functions
/**user registration function */
function registerUser() {
  const emailText = emailInput.value.trim();
  const passwordText = passwordInput.value.trim();
  let nameInput = document.getElementById("name");
  let nameText = nameInput.value.trim();
  if (nameText === "" || emailText === "" || passwordText === "") {
    alert("Iltimos, barcha maydonlarni to'ldiring!");
    return;
  }
  const existingUser = localStorage.getItem(emailText);
  if (existingUser) {
    alert("Siz oldin ro'yhatdan o'tgansiz! Iltimos login qiling.");
    window.location.href = "./login.html";
    return;
  }

  const user = {
    id: users.length + 1,
    name: nameText,
    email: emailText,
    password: passwordText,
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users)); // all users
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
}

/**
 * user login function
 */
function loginUser() {
  // login
  const user = JSON.parse(localStorage.getItem(emailText));
  if (user && user.password === passwordText) {
    alert(`Login muvaffaqiyatli amalga oshirildi,${user.name}!`);
    localStorage.setItem("logged_in_user", user.email);
    window.location.href = "../user_page/index.html";
  }
  console.log(errMessage);
  alert(errMessage);
}

//events
registerBtn.addEventListener("click", registerUser);
loginBtn.addEventListener("click", loginUser);
