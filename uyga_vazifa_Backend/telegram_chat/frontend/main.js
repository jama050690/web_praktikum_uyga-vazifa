const usersList = document.getElementById("users");
const messageBox = document.getElementById("messages");
const chatUsername = document.getElementById("chat-username");
const chatEmail = document.getElementById("chat-email");
const chatAvatar = document.getElementById("chat-avatar");
const BASE_API = "http://localhost:3000";
//  logged user
let loggedUser;
let token;
//  DOM tayyor bo‘lganda
document.addEventListener("DOMContentLoaded", () => {
  loggedUser = localStorage.getItem("logged_in_user");
  token = localStorage.getItem("access_token");

  if (!loggedUser || !token) {
    window.location.href = "./auth/login.html";
  }
  const loadBtn = document.getElementById("load");

  if (loadBtn) {
    loadBtn.onclick = () => {
      console.log("Load clicked");
    };
  }
  renderUsers();
});

// RENDER USERS
async function renderUsers() {
  await fetch(`${BASE_API}/users`, {
    method: "GET",
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      users = res;

      console.log(res);

      users.forEach((u) => {
        // O‘zingni o‘zingga chiqarmaslik (ixtiyoriy)
        if (u.username === loggedUser.username) return;

        const li = document.createElement("li");
        li.className =
          "w-full px-4 py-5 border border-gray-300 rounded-[12px] cursor-pointer " +
          "hover:bg-gray-100 transition";
        const now = new Date();
        const time = `${now.getHours()}:${String(now.getMinutes()).padStart(
          2,
          "0"
        )}`;

        li.textContent = `${u.username} (${u.email}) ${time}`;
        li.onclick = () => {
          setActiveChatUser(u);
          loadMessages(u.username);
        };

        usersList.appendChild(li);
      });
    })
    .catch((error) => console.error(error));
}
// LOAD MESSAGES
async function loadMessages(username) {
  const res = await fetch(
    `${BASE_API}/messages?username=${encodeURIComponent(username)}`
  );

  if (!res.ok) {
    console.error("Failed to load messages", res.status);
    return;
  }

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
function setActiveChatUser(user) {
  chatUsername.textContent = user.username;
  chatEmail.textContent = user.email;

  chatAvatar.src = user.avatar || "./public/images/avatar1.png";
}
li.onclick = () => {
  document
    .querySelectorAll("#users li")
    .forEach((el) => el.classList.remove("bg-gray-200"));

  li.classList.add("bg-gray-200");

  setActiveChatUser(u);
  loadMessages(u.username);
};
