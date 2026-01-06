const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const genderInputs = document.querySelectorAll("#gender input");
let users = [];
const USERS = "users";
let token;
let logged_in_user;
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

    if (res.ok) {
      // user oldin bor
      alert(data.message);
      setTimeout(() => {
        window.location.href = "./login.html";
      }, 100);
      return;
    }
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

    // Backenddan kelgan user username va token saqlanadi
    if (res.ok) {
      localStorage.setItem("logged_in_user", JSON.stringify(data.user));
      localStorage.setItem("access_token", data.access_token);
      window.location.href = "/index.html";
    }
  } catch (err) {
    alert("Server bilan bog'lanib bo'lmadi");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.href;

  if (currentUrl.includes("login")) {
    returning_user_check();
    const btn = document.getElementById("login_btn");
    if (btn) btn.addEventListener("click", loginUser);
  } else {
    const btn = document.getElementById("register_btn");
    if (btn) btn.addEventListener("click", registerUser);
  }
});

function returning_user_check() {
  token = localStorage.getItem("access_token") || "";
  logged_in_user = localStorage.getItem("logged_in_user") || "";

  if (token && logged_in_user) {
    const userObj = JSON.parse(logged_in_user);
    alert(`Welcome back, ${userObj.username}`);
    window.location.href = "/index.html";
  }
}
