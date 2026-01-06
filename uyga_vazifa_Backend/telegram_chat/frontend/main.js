const usersList = document.getElementById("users");
const messageBox = document.getElementById("messages");
const menuBtns = document.querySelectorAll(".menuBtn");
const menuDropdowns = document.querySelectorAll(".menuDropdown");
const chatUsername = document.getElementById("chatUsername");
const chatAvatar = document.getElementById("chatAvatar");
const msgInput = document.getElementById("msgs");
const sendBtn = document.getElementById("sendBtn");
const BASE_API = "http://localhost:3000";

let loggedUser; // string username
let token;
let users = [];
let activeChatUser = null;
const LOGGED_IN_USR = "logged_in_user";

document.addEventListener("DOMContentLoaded", () => {
  loggedUser = localStorage.getItem(LOGGED_IN_USR);
  token = localStorage.getItem("access_token");
  if (!loggedUser || !token) {
    window.location.href = "/auth/login.html";
    return;
  }

  // logout
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem(LOGGED_IN_USR);
      localStorage.removeItem("access_token");
      window.location.href = "/auth/login.html";
    });
  }

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

async function fetchUsers() {
  usersList.innerHTML = "";
  try {
    const res = await fetch(`${BASE_API}/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    users = await res.json();
    users.forEach((u) => {
      if (u.username === loggedUser) return;
      const li = document.createElement("li");
      li.className =
        "w-full px-4 py-5 border-none active:bg-blue-600 flex justify-between cursor-pointer hover:bg-gray-100 transition";
      const now = new Date();
      const time = `${now.getHours()}:${String(now.getMinutes()).padStart(
        2,
        "0"
      )}`;
      li.innerHTML = `
        <span class="font-medium text-gray-800">${u.username}</span>
        <span class="text-sm text-gray-500">${time}</span>
      `;
      li.onclick = () => {
        document
          .querySelectorAll("#users li")
          .forEach((item) =>
            item.classList.remove("bg-blue-600", "text-white")
          );
        li.classList.add("bg-blue-600", "text-white");
        setActiveChatUser(u);
        loadMessages(u.username);
      };
      usersList.appendChild(li);
    });
  } catch (err) {
    console.error("Users fetch error", err);
  }
}

async function loadMessages(username) {
  if (!username) return;
  const res = await fetch(
    `${BASE_API}/messages?username=${encodeURIComponent(username)}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) return;
  const messages = await res.json();
  messageBox.innerHTML = "";
  messages.forEach((m) => {
    const div = document.createElement("div");
    const isMine = m.from === loggedUser;
    div.className = isMine
      ? "bg-blue-500 text-white p-2 rounded-lg ml-auto w-fit"
      : "bg-gray-200 p-2 rounded-lg w-fit";
    div.textContent = m.text;
    messageBox.appendChild(div);
  });
  messageBox.scrollTop = messageBox.scrollHeight;
}

async function sendMessage() {
  const text = msgInput ? msgInput.value.trim() : "";
  if (!text || !activeChatUser) return;
  await fetch(`${BASE_API}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      from: loggedUser,
      to: activeChatUser.username,
      text,
    }),
  });
  if (msgInput) msgInput.value = "";
  loadMessages(activeChatUser.username);
}

function setActiveChatUser(user) {
  if (!user || !user.username) return;
  activeChatUser = user;
  chatUsername.textContent = user.username;
  chatAvatar.src = user.avatar || "./public/images/avatar2.png";
}
