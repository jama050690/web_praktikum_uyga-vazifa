const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const genderInputs = document.querySelectorAll("#gender input");
let users = [];
const USERS = "users";
let token;
let logged_in_user;

// ================= HELPERS =================

function safeJSONParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

// functions
/**user registration function */
async function registerUser() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const gender = genderInputs[0].checked ? "male" : "female";

  if (!name || !email || !password) {
    alert("Iltimos, barcha maydonlarni to'ldiring!");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        gender,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message);
      setTimeout(() => {
        window.location.href = "./login.html";
      }, 100);
      return;
    } else {
      alert(data.message);
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
    if (data && data.access_token && data.user) {
      localStorage.setItem("logged_in_user", JSON.stringify(data.user));
      localStorage.setItem("access_token", data.access_token);
      window.location.href = "/index.html";
    } else {
      alert("Login javobi noto‘g‘ri");
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
  token = localStorage.getItem("access_token");
  const rawUser = localStorage.getItem("logged_in_user");

  if (!token || !rawUser) return;

  const userObj = safeJSONParse(rawUser);
  if (!userObj || !userObj.username) return;

  alert(`Welcome back, ${userObj.username}`);
  window.location.href = "/index.html";
}
