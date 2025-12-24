const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const genderInputs = document.querySelectorAll("#gender input");
let users = [];
const USERS = "users";
// functions
/**user registration function */
async function registerUser() {
  const nameInput = document.getElementById("name");
  const username = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  console.log(genderInputs);

  const gender = genderInputs[0].checked ? "male" : "female";

  console.log(`tanlandi: `, gender);

  if (!username || !email || !password) {
    alert("Iltimos, barcha maydonlarni to'ldiring!");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        gender,
      }),
    });

    const data = await res.json();

    console.log(`javob:`, data);

    debugger;

    if (res.ok) {
      // user oldin bor
      alert(data.message);
      window.location.href = "./login.html";
      return;
    }

    // session
    localStorage.setItem("logged_in_user", data.user.username);

    alert(`Xush kelibsiz, ${data.user.username}!`);
    window.location.href = "../index.html";
  } catch (err) {
    alert("Server bilan boglanib bolmadi");
  }
}

/**
 * user login function
 */
async function loginUser() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("Email va parolni kiriting");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    localStorage.setItem("logged_in_user", data.user.username);

    alert(`Xush kelibsiz, ${data.user.username}!`);
    window.location.href = "../index.html";
  } catch (err) {
    alert("Server bilan bog'lanib bo'lmadi");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.href;

  if (currentUrl.includes("login")) {
    const btn = document.getElementById("login_btn");
    if (btn) btn.addEventListener("click", loginUser);
  } else {
    const btn = document.getElementById("register_btn");
    if (btn) btn.addEventListener("click", registerUser);
  }
});
