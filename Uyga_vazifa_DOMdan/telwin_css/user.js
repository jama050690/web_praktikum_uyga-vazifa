const nameEl = document.getElementById("name");
const logoutBtn = document.getElementById("logout");
const editEl = document.getElementById("edit");
const darkEl = document.getElementById("dark");
const modeIcon = document.getElementById("modeIcon");
var currentUser; // user object
var currentUserEmail; // user email
const LOGGED_USER = "logged_in_user";

const profile_photoEl = document.getElementById("previewImage");

// Dark mode menu
const MODE = "mode";
let isDark = false;

darkEl.addEventListener("click", (e) => {
  e.preventDefault();
  isDark = !isDark;
  localStorage.setItem(MODE, isDark);
  changeMode();
});

document.addEventListener("DOMContentLoaded", () => {
  const currentMode = localStorage.getItem(MODE);
  if (currentMode !== null) {
    isDark = currentMode === "true";
  }
  changeMode();

  currentUserEmail = localStorage.getItem(LOGGED_USER);
  if (currentUserEmail) {
    currentUser = JSON.parse(localStorage.getItem(currentUserEmail));
    nameEl.textContent = currentUser.name;
  } else {
    alert("User not found! Please, login again!");
    window.location.href = "./auth/index.html";
  }
  if (currentUser.profileUrl) {
    profile_photoEl.src = currentUser.profileUrl;
  }
});

const changeMode = () => {
  if (isDark) {
    document.body.classList.add("dark_mode");
    document.body.classList.remove("light_mode");
    modeIcon.src = "/images/Sun_mode.svg";
  } else {
    document.body.classList.add("light_mode");
    document.body.classList.remove("dark_mode");
    modeIcon.src = "/images/Dark_mode.svg";
  }
};

// login section
document.querySelector(".login").addEventListener("click", () => {
  window.location.href = "./auth/index.html";
});

// logout button
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem(LOGGED_USER);
  window.location.reload();
});
// local pagega saqlaash va chaqirish

//   img put
document
  .getElementById("uploadImg")
  .addEventListener("change", async function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
      profile_photoEl.src = e.target.result;
      localStorage.setItem(currentUserEmail, JSON.stringify(currentUser));
    };

    reader.readAsDataURL(file);
    // Upload to Node.js backend
    const formData = new FormData();
    formData.append("photo", file);

    const response = await fetch("http://localhost:3001/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    // REAL FILE PATH FROM BACKEND
    currentUser.profileUrl = data.url;

    // Save user info
    localStorage.setItem(currentUserEmail, JSON.stringify(currentUser));

    console.log("Image saved at:", data.url);
  });

const fileInput = document.getElementById("uploadImg");

fileInput.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch("http://localhost:3001/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  console.log("Saved:", data);
});
