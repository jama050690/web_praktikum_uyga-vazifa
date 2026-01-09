// ================= ELEMENTS =================
const usersList = document.getElementById("users");
const messageBox = document.getElementById("messages");
const menuBtns = document.querySelectorAll(".menuBtn");
const menuDropdowns = document.querySelectorAll(".menuDropdown");
const chatUsername = document.getElementById("chatUsername");
const chatAvatar = document.getElementById("chatAvatar");
const msgInput = document.getElementById("msgs");
const sendBtn = document.getElementById("sendBtn");
const inboxBadge = document.getElementById("inboxBadge");

const BASE_API = "http://localhost:3000";

let loggedUser = null;
let activeChatUser = null;
let currentUsers = [];

const LOGGED_IN_USR = "logged_in_user";

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

function formatTime(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleTimeString("uz-UZ", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getUserListDayLabel(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);
  const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const msgDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const diffDays = Math.floor((today - msgDay) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";

  return `${date.getDate()}-${date.toLocaleString("uz-UZ", { month: "long" })}`;
}

function getMessageDayLabel(dateString) {
  return getUserListDayLabel(dateString);
}

function getAvatarFromUsername(username) {
  if (!username) return 1;
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash += username.charCodeAt(i);
  }
  return (hash % 6) + 1;
}
// =================== getUserStatusText ======================
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

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  // AUTH CHECK
  const rawUser = localStorage.getItem(LOGGED_IN_USR);
  loggedUser = rawUser ? safeJSONParse(rawUser) : null;

  if (!loggedUser || !localStorage.getItem("access_token")) {
    location.replace("/auth/login.html");
    return;
  }

  document.getElementById("user-title").textContent = loggedUser.name;

  fetchUsers();
  loadOwnerStatusDynamic();
  loadInbox();

  setInterval(loadOwnerStatusDynamic, 5000);
  setInterval(loadInbox, 5000);

  // logout
  const logoutBtn = document.getElementById("logout-btn");
  logoutBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    logout();
  });

  // send message
  sendBtn?.addEventListener("click", sendMessage);
  msgInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });

  // dropdowns
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

  // message icon
  const messageIcon = document.getElementById("messageIcon");
  messageIcon?.addEventListener("click", () => {
    loadInbox();
    if (!activeChatUser && currentUsers.length > 0) {
      openChatFromInbox(currentUsers[0].username);
    }
  });
});

// ================= USERS =================
async function fetchUsers() {
  usersList.innerHTML = "";

  const res = await fetch(`${BASE_API}/users`, { headers: authHeader() });
  if (!res.ok) return logout();

  const users = await res.json();
  currentUsers = users;

  users.forEach((u) => {
    const li = document.createElement("li");
    li.className =
      "flex items-center gap-3 px-4 py-4 cursor-pointer rounded-xl hover:bg-green-100";

    const img = document.createElement("img");
    img.src = `/public/images/avatar${getAvatarFromUsername(u.username)}.png`;
    img.className = "w-8 h-8 rounded-full";

    const name = document.createElement("span");
    name.className = "user-name";
    name.textContent = u.username;

    const time = document.createElement("div");
    time.className = "ml-auto text-right text-xs";

    if (u.lastMessageTime) {
      time.innerHTML = `
        <div class="text-[11px] text-gray-400">
          ${getUserListDayLabel(u.lastMessageTime)}
        </div>
        <div>${formatTime(u.lastMessageTime)}</div>
      `;
    }

    li.append(img, name, time);

    li.onclick = async () => {
      document
        .querySelectorAll("#users li")
        .forEach((el) => el.classList.remove("selected"));

      li.classList.add("selected");
      setActiveChatUser(u);
      await loadMessages(u.username);
      markMessagesAsRead(u.username);
      loadInbox();
    };

    usersList.appendChild(li);
  });
}

// ================= CHAT HEADER =================
function setActiveChatUser(user) {
  activeChatUser = user;
  messageBox.innerHTML = "";

  if (!chatUsername || !chatAvatar) return;

  chatUsername.textContent = user.username;
  chatAvatar.src = `/public/images/avatar${getAvatarFromUsername(
    user.username
  )}.png`;

  const timeEl = document.getElementById("chatUserTime");
  if (timeEl && user.lastMessageTime) {
    timeEl.innerHTML = `
      <div class="text-[11px] text-gray-400">
        ${getUserListDayLabel(user.lastMessageTime)}
      </div>
      <div>${formatTime(user.lastMessageTime)}</div>
    `;
  } else if (timeEl) {
    timeEl.textContent = "";
  }

  loadUserStatus(user.username);
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

  let lastDayLabel = null;

  messages.forEach((m) => {
    const dayLabel = getMessageDayLabel(m.created_at);
    if (dayLabel !== lastDayLabel) {
      const dayDiv = document.createElement("div");
      dayDiv.className = "text-center text-gray-400 my-3 text-sm";
      dayDiv.textContent = dayLabel;
      messageBox.appendChild(dayDiv);
      lastDayLabel = dayLabel;
    }

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

// ============== SendMessage =====================
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
  getUserStatusText(loggedUser.username).then((text) => {
    const el = document.getElementById("ownerStatus");
    if (el) el.textContent = text;
  });
}

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
    el.textContent =
      Date.now() - last < 30000 ? "online" : formatTime(d.lastOnlineTime);
  } catch {
    el.textContent = "";
  }
}

// ================= INBOX =================
async function loadInbox() {
  if (!inboxBadge) return;

  const res = await fetch(`${BASE_API}/messages/inbox`, {
    headers: authHeader(),
  });
  const data = await res.json();

  inboxBadge.textContent = data.totalUnread;
  inboxBadge.classList.toggle("hidden", data.totalUnread === 0);
}

function openChatFromInbox(username) {
  const user = currentUsers.find((u) => u.username === username);
  if (!user) return;

  setActiveChatUser(user);
  loadMessages(username);
  markMessagesAsRead(username);
  loadInbox();
}

async function markMessagesAsRead(from) {
  await fetch(`${BASE_API}/messages/read`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
    body: JSON.stringify({ from }),
  });
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

// ================= ONLINE PING =================
setInterval(() => {
  fetch(`${BASE_API}/status/ping`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
    body: JSON.stringify({ username: loggedUser.username }),
  });
}, 15000);

// ============== Input Search user ==============
const searchInput = document.getElementById("searchInput");
searchInput?.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase().trim();

  document.querySelectorAll("#users li").forEach((li) => {
    const name =
      li.querySelector(".user-name")?.textContent.toLowerCase() || "";
    li.style.display = name.includes(value) ? "flex" : "none";
  });
});
