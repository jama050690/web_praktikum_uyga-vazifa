// ================= ELEMENTS =================
const usersList = document.getElementById("users");
const messageBox = document.getElementById("messages");
const menuBtns = document.querySelectorAll(".menuBtn");
const menuDropdowns = document.querySelectorAll(".menuDropdown");
const chatUsername = document.getElementById("chatUsername");
const chatAvatar = document.getElementById("chatAvatar");
const msgInput = document.getElementById("msgs");
const sendBtn = document.getElementById("sendBtn");

const BASE_API = "http://localhost:3000";

let loggedUser = null;
let activeChatUser = null;

const LOGGED_IN_USR = "logged_in_user";

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  // ===== AUTH CHECK =====
  const rawUser = localStorage.getItem(LOGGED_IN_USR);
  loggedUser = rawUser ? safeJSONParse(rawUser) : null;

  if (!loggedUser || !localStorage.getItem("access_token")) {
    window.location.replace("/auth/login.html");
    return;
  }

  updateUserTitle();
  fetchUsers();
  loadOwnerStatusDynamic();

  // ===== LOGOUT BUTTON =====
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      logout();
    });
  }

  // ===== SEND MESSAGE =====
  sendBtn?.addEventListener("click", sendMessage);
  msgInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });

  // ===== DROPDOWNS =====
  menuBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const dropdown = btn.nextElementSibling;
      menuDropdowns.forEach((d) => d !== dropdown && d.classList.add("hidden"));
      dropdown.classList.toggle("hidden");
    });
  });

  document.addEventListener("click", () => {
    menuDropdowns.forEach((d) => d.classList.add("hidden"));
  });
});

// ================= HELPERS =================
function safeJSONParse(v) {
  try {
    return JSON.parse(v);
  } catch {
    return null;
  }
}

const authHeader = () => {
  const t = localStorage.getItem("access_token");
  return t ? { Authorization: `Bearer ${t}` } : {};
};

function updateUserTitle() {
  document.getElementById("user-title").textContent = loggedUser.name;
}

function formatTime(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleTimeString("uz-UZ", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ================= USERS =================
async function fetchUsers() {
  usersList.innerHTML = "";

  const res = await fetch(`${BASE_API}/users`, {
    headers: authHeader(),
  });

  if (!res.ok) return logout();

  const users = await res.json();

  users.forEach((u, i) => {
    u.avatarIndex = i;

    const li = document.createElement("li");
    li.dataset.username = u.username;
    li.className =
      "flex items-center gap-3 px-4 py-4 cursor-pointer rounded-xl hover:bg-green-100";

    const img = document.createElement("img");
    img.src = `/public/images/avatar${(i % 6) + 1}.png`;
    img.className = "w-8 h-8 rounded-full";

    const name = document.createElement("span");
    name.className = "user-name";
    name.textContent = u.name;

    const time = document.createElement("span");
    time.className = "status ml-auto text-xs text-gray-500";
    time.textContent = "…";

    getUserStatusText(u.username).then((t) => (time.textContent = t));

    li.append(img, name, time);

    li.onclick = async () => {
      document
        .querySelectorAll("#users li")
        .forEach((el) => el.classList.remove("selected"));

      li.classList.add("selected");
      setActiveChatUser(u);
      await loadMessages(u.username);
    };

    usersList.appendChild(li);
  });
}

// ================= MESSAGES =================
async function loadMessages(username) {
  const res = await fetch(
    `${BASE_API}/messages?username=${loggedUser.username}&with=${username}`,
    { headers: authHeader() }
  );

  if (!res.ok) return logout();

  const messages = await res.json();
  messageBox.innerHTML = "";

  messages.forEach((m) => {
    const isMine = m.from === loggedUser.username;

    const wrap = document.createElement("div");
    wrap.className = `flex mb-2 ${isMine ? "justify-end" : "justify-start"}`;

    const bubble = document.createElement("div");
    bubble.className =
      "bg-blue-500 text-white px-3 py-2 rounded-xl max-w-[70%]";

    bubble.innerHTML = `
      <span>${m.text}</span>
      <span class="block text-[11px] text-white/70 text-right">
        ${formatTime(m.created_at)}
      </span>
    `;

    wrap.appendChild(bubble);
    messageBox.appendChild(wrap);
  });

  messageBox.scrollTop = messageBox.scrollHeight;
}

async function sendMessage() {
  const text = msgInput.value.trim();
  if (!text || !activeChatUser) return;

  await fetch(`${BASE_API}/messages`, {
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

  msgInput.value = "";
  await loadMessages(activeChatUser.username);
}

// ================= STATUS =================
function loadOwnerStatusDynamic() {
  if (!loggedUser) return;

  getUserStatusText(loggedUser.username).then((text) => {
    const el = document.getElementById("ownerStatus");
    if (el) el.textContent = text;
  });
}

loadOwnerStatusDynamic();

setInterval(loadOwnerStatusDynamic, 5000);
// Load userlar
async function loadUserStatus(username) {
  const el = document.getElementById("chatStatus");
  if (!el) return;

  try {
    const res = await fetch(`${BASE_API}/users/${username}/status`);
    const d = await res.json();

    if (!d.lastOnlineTime) {
      el.textContent = "";
      return;
    }

    const last = new Date(d.lastOnlineTime).getTime();
    const now = Date.now();

    if (now - last < 30000) {
      el.textContent = "online";
      el.className = "text-xs text-green-500";
    } else {
      el.textContent = formatTime(d.lastOnlineTime);
      el.className = "text-xs text-gray-500";
    }
  } catch {
    el.textContent = "";
  }
}

async function getUserStatusText(username) {
  try {
    const res = await fetch(`${BASE_API}/users/${username}/status`);
    const d = await res.json();

    if (!d.lastOnlineTime) return "";

    const last = new Date(d.lastOnlineTime).getTime();
    const now = Date.now();
    if (now - last < 30000) {
      return "online";
    }

    return formatTime(d.lastOnlineTime);
  } catch {
    return "";
  }
}
function setActiveChatUser(user) {
  activeChatUser = user;
  chatUsername.textContent = user.username;
  chatAvatar.src = `/public/images/avatar${(user.avatarIndex % 6) + 1}.png`;
  loadUserStatus(user.username);
}

// ================= LOGOUT =================
async function logout() {
  try {
    await fetch(`${BASE_API}/status/offline`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: loggedUser.username }),
    });
  } catch {}

  localStorage.clear();
  location.replace("/auth/login.html");
}

// Set interval online uchun
setInterval(() => {
  fetch(`${BASE_API}/status/ping`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
    body: JSON.stringify({
      username: loggedUser.username,
    }),
  });
}, 15000);

// ============== Input Search user ==============

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase().trim();

  document.querySelectorAll("#users li").forEach((li) => {
    const name = li.querySelector(".user-name").textContent.toLowerCase();

    if (name.includes(value)) {
      li.style.display = "flex"; // yoki block
    } else {
      li.style.display = "none";
    }
  });
});
