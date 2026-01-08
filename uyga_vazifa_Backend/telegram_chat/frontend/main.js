const usersList = document.getElementById("users");
const messageBox = document.getElementById("messages");
const menuBtns = document.querySelectorAll(".menuBtn");
const menuDropdowns = document.querySelectorAll(".menuDropdown");
const chatUsername = document.getElementById("chatUsername");
const chatAvatar = document.getElementById("chatAvatar");
const msgInput = document.getElementById("msgs");
const sendBtn = document.getElementById("sendBtn");
const chatIcon = document.getElementById("chatIcon");
const chatPanel = document.getElementById("chatPanel");
const closeChatPanel = document.getElementById("closeChatPanel");

const BASE_API = "http://localhost:3000";

let loggedUser;
let token;
let activeChatUser = null;
const LOGGED_IN_USR = "logged_in_user";

document.addEventListener("DOMContentLoaded", () => {
  // ===== AUTH =====
  loggedUser = JSON.parse(localStorage.getItem(LOGGED_IN_USR));
  token = localStorage.getItem("access_token");

  if (!loggedUser || !token) {
    window.location.replace("/auth/login.html");
    return;
  }

  // ===== INIT UI =====
  updateUserTitle();
  fetchUsers();
  loadOwnerStatus();
  // ===== LOGOUT =====
  document.addEventListener("click", (e) => {
    if (e.target.id === "logout-btn") {
      e.preventDefault();
      localStorage.clear();
      window.location.replace("/auth/login.html");
    }
  });

  // ===== SEND MESSAGE =====
  if (sendBtn) sendBtn.addEventListener("click", sendMessage);

  if (msgInput) {
    msgInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
      }
    });
  }

  // ===== DROPDOWNS =====
  menuBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const dropdown = btn.nextElementSibling;
      menuDropdowns.forEach(
        (dd) => dd !== dropdown && dd.classList.add("hidden")
      );
      dropdown.classList.toggle("hidden");
    });
  });

  document.addEventListener("click", () => {
    menuDropdowns.forEach((dd) => dd.classList.add("hidden"));
  });
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

  usersData.forEach((u, i) => {
    u.avatarIndex = i;
    const img = document.createElement("img");
    const avatarNum = (i % 6) + 1;
    img.src = `/public/images/avatar${avatarNum}.png`;
    img.alt = `${u.name} avatar`;
    img.className = "w-8 h-8 rounded-full";

    const name = document.createElement("span");
    name.textContent = u.name;

    const li = document.createElement("li");
    li.className =
      "w-full px-4 py-5 h-[90px] rounded-2xl cursor-pointer hover:bg-green-100 flex items-center gap-3";

    const time = document.createElement("span");
    time.className = "ml-auto text-xs text-gray-500";
    time.textContent = new Date().toLocaleTimeString("uz-UZ", {
      hour: "2-digit",
      minute: "2-digit",
    });

    li.appendChild(img);
    li.appendChild(name);
    li.appendChild(time);

    li.onclick = () => {
      document
        .querySelectorAll("#users li")
        .forEach((el) => el.classList.remove("selected"));

      li.classList.add("selected");

      setActiveChatUser(u);
      loadMessages(u.username);
    };

    usersList.appendChild(li);
  });
}

function formatTime(iso) {
  if (!iso) return "";

  const d = new Date(iso);
  return d.toLocaleTimeString("uz-UZ", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

const authHeader = () => ({ Authorization: `Bearer ${token}` });

async function loadMessages(username) {
  if (!username) return;

  const res = await fetch(
    `${BASE_API}/messages?username=${encodeURIComponent(
      loggedUser.username
    )}&with=${encodeURIComponent(username)}`,
    { headers: authHeader() }
  );

  const messages = await res.json();
  messageBox.innerHTML = "";

  messages.forEach((m) => {
    const isMine = m.from === loggedUser.username;

    // wrapper (chap / o‘ng)
    const wrapper = document.createElement("div");
    wrapper.className = `flex w-full mb-2 ${
      isMine ? "justify-end" : "justify-start"
    }`;

    // bubble
    const bubble = document.createElement("div");
    bubble.className =
      "bg-blue-500 text-white rounded-xl px-3 py-2 max-w-[70%] min-w-[56px]";

    // row (text + time bir qatorda)
    const row = document.createElement("div");
    row.className = "flex items-end gap-2";

    // text
    const text = document.createElement("span");
    text.textContent = m.text;
    text.className = "whitespace-pre-wrap";

    // time
    const time = document.createElement("span");
    time.textContent = formatTime(m.created_at);
    time.className = "text-[11px] text-white/70 self-end";

    // yig‘ish
    row.appendChild(text);
    row.appendChild(time);
    bubble.appendChild(row);
    wrapper.appendChild(bubble);
    messageBox.appendChild(wrapper);
  });

  messageBox.scrollTop = messageBox.scrollHeight;
}
async function loadOwnerStatus() {
  const statusEl = document.getElementById("ownerStatus");
  if (!statusEl || !loggedUser?.username) return;

  try {
    const res = await fetch(`${BASE_API}/users/${loggedUser.username}/status`, {
      headers: authHeader(),
    });

    if (!res.ok) {
      statusEl.textContent = "offline";
      return;
    }

    const data = await res.json();

    if (data.online) {
      statusEl.textContent = "online";
      statusEl.className = "text-xs text-green-500";
    } else if (data.lastSeen) {
      statusEl.textContent = "last seen " + formatTime(data.lastSeen);
      statusEl.className = "text-xs text-gray-500";
    } else {
      statusEl.textContent = "offline";
    }
  } catch {
    statusEl.textContent = "offline";
  }
}

async function sendMessage() {
  const textValue = msgInput.value.trim();
  if (!textValue || !activeChatUser) return;

  const res = await fetch(`${BASE_API}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
    body: JSON.stringify({
      to: activeChatUser.username,
      text: textValue,
    }),
  });

  const newMessage = await res.json();
  msgInput.value = "";

  // wrapper (har doim o‘ng tomonda)
  const wrapper = document.createElement("div");
  wrapper.className = "flex w-full mb-2 justify-end";

  // bubble
  const bubble = document.createElement("div");
  bubble.className =
    "bg-blue-500 text-white rounded-xl px-3 py-2 max-w-[70%] min-w-[56px]";

  // row
  const row = document.createElement("div");
  row.className = "flex items-end gap-2";

  // text
  const text = document.createElement("span");
  text.textContent = newMessage.text;
  text.className = "whitespace-pre-wrap break-words";

  // time
  const time = document.createElement("span");
  time.textContent = formatTime(newMessage.created_at);
  time.className = "text-[11px] text-white/70 self-end";

  // yig‘ish
  row.appendChild(text);
  row.appendChild(time);
  bubble.appendChild(row);
  wrapper.appendChild(bubble);
  messageBox.appendChild(wrapper);

  messageBox.scrollTop = messageBox.scrollHeight;
}

window.addEventListener("load", () => {
  fetch(`${BASE_API}/status/online`, {
    method: "POST",
    headers: authHeader(),
  });
});

window.addEventListener("beforeunload", () => {
  navigator.sendBeacon(`${BASE_API}/status/last`, "");
});

async function loadUserStatus(username) {
  const res = await fetch(`${BASE_API}/users/${username}/status`);
  if (!res.ok) return;

  const data = await res.json();
  const statusEl = document.getElementById("chatStatus");
  if (!statusEl) return;

  const FIVE_MIN_MS = 5 * 60 * 1000;
  const lastMs = data.lastOnlineTime
    ? new Date(data.lastOnlineTime).getTime()
    : NaN;

  if (data.online) {
    statusEl.textContent = "online";
    statusEl.className = "text-xs text-green-500";
  } else if (!data.lastOnlineTime || Number.isNaN(lastMs)) {
    statusEl.textContent = "offline";
    statusEl.className = "text-xs text-gray-400";
  } else if (Date.now() - lastMs <= FIVE_MIN_MS) {
    statusEl.textContent = "online";
    statusEl.className = "text-xs text-green-500";
  } else {
    statusEl.textContent = "last seen " + formatTime(data.lastOnlineTime);
    statusEl.className = "text-xs text-gray-500";
  }
}

function setActiveChatUser(user) {
  if (!user || !user.username) return;

  activeChatUser = user;
  chatUsername.textContent = user.username;

  const avatarNum = ((user.avatarIndex ?? 0) % 6) + 1;
  chatAvatar.src = user.avatar || `/public/images/avatar${avatarNum}.png`;

  loadUserStatus(user.username);
}
