const usersList = document.getElementById("users");
const messageBox = document.getElementById("messages");
const menuBtns = document.querySelectorAll(".menuBtn");
const menuDropdowns = document.querySelectorAll(".menuDropdown");
const chatUsername = document.getElementById("chatUsername");
const chatAvatar = document.getElementById("chatAvatar");
const msgInput = document.getElementById("msgs");
const sendBtn = document.getElementById("sendBtn");
const BASE_API = "http://localhost:3000";

let loggedUser;
let token;
let activeChatUser = null;
const LOGGED_IN_USR = "logged_in_user";

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  loggedUser = JSON.parse(localStorage.getItem(LOGGED_IN_USR)) || {};
  token = localStorage.getItem("access_token");
  if (!loggedUser || !token) {
    window.location.href = "/auth/login.html";
    return;
  }

  updateUserTitle();
  // logout
  document.addEventListener("click", (e) => {
    if (e.target.id === "logout-btn") {
      e.preventDefault();
      localStorage.removeItem("logged_in_user");
      localStorage.removeItem("access_token");
      window.location.replace("/auth/login.html");
    }
  });

  // send actions
  if (sendBtn) sendBtn.addEventListener("click", sendMessage);
  if (msgInput) {
    msgInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
      }
    });
  }

  // dropdowns
  menuBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const dropdown = btn.nextElementSibling;
      menuDropdowns.forEach((dd) => {
        if (dd !== dropdown) dd.classList.add("hidden");
      });
      dropdown.classList.toggle("hidden");
    });
  });
  document.addEventListener("click", () => {
    menuDropdowns.forEach((dd) => dd.classList.add("hidden"));
  });

  fetchUsers();
});

function updateUserTitle() {
  console.log("user title updated: ", loggedUser);

  document.getElementById("user-title").textContent = loggedUser.name;
}
async function fetchUsers() {
  usersList.innerHTML = "";

  const res = await fetch(`${BASE_API}/users`, {
    headers: authHeader(),
  });

  const usersData = await res.json();

  if (!Array.isArray(usersData)) {
    console.error("Users API error:", usersData);
    return; // ❗ crash bo‘lmasin
  }

  usersData.forEach((u) => {
    const li = document.createElement("li");
    li.className = `w-full px-4 py-5 cursor-pointer hover:bg-green-100`;

    li.textContent = u.name;

    li.onclick = () => {
      // 🔥 remove active from all
      document
        .querySelectorAll("#users li")
        .forEach((el) => el.classList.remove("selected"));

      // ✅ add active to clicked one
      li.classList.add("selected");

      setActiveChatUser(u);
      loadMessages(u.username);
    };

    // li.onmouseover = () => {
    //   li.className = `w-full px-4 py-5 cursor-pointer bg-green-100`;
    // };

    // li.onmouseout = () => {
    //   li.className = `w-full px-4 py-5 cursor-pointer`;
    // };

    usersList.appendChild(li);
  });
}
const authHeader = () => ({ Authorization: `Bearer ${token}` });

async function loadMessages(username) {
  if (!username) return;
  const res = await fetch(
    `${BASE_API}/messages?username=${encodeURIComponent(
      loggedUser.username
    )}&with=${encodeURIComponent(username)}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const messages = await res.json();
  messageBox.innerHTML = "";

  messages.forEach((m) => {
    const div = document.createElement("div");
    const isMine = m.from === loggedUser.username;

    div.className = isMine
      ? "bg-blue-500 text-white p-2 rounded-lg ml-auto w-fit"
      : "bg-gray-200 p-2 rounded-lg w-fit";

    div.textContent = m.text;
    messageBox.appendChild(div);
  });
}

async function sendMessage() {
  const text = msgInput ? msgInput.value.trim() : "";
  if (!text || !activeChatUser) return;

  const res = await fetch(`${BASE_API}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
    body: JSON.stringify({
      to: activeChatUser.username,
      text,
    }),
  });

  const newMessage = await res.json();
  if (msgInput) msgInput.value = "";

  // yangi xabarni UIga qo‘shish
  const div = document.createElement("div");
  div.className = "bg-blue-500 text-white p-2 rounded-lg ml-auto w-fit";
  div.textContent = newMessage.text;
  messageBox.appendChild(div);
}

function setActiveChatUser(user) {
  if (!user || !user.username) return;
  activeChatUser = user;
  chatUsername.textContent = user.username;
  chatAvatar.src = user.avatar || "./public/images/avatar4.png";
}
