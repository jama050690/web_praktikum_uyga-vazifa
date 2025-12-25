const usersList = document.getElementById("users");
const messageBox = document.querySelector(".message");
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
        li.className = "p-2 border-b cursor-pointer hover:bg-gray-100";

        const now = new Date();
        const time = `${now.getHours()}:${String(now.getMinutes()).padStart(
          2,
          "0"
        )}`;

        li.textContent = `${u.username} (${u.email}) ${time}`;

        li.onclick = () => loadMessages(u.username);

        usersList.appendChild(li);
      });
    })
    .catch((error) => console.error(error));
}
// LOAD MESSAGES
async function loadMessages(username) {
  const res = await fetch(`${BASE_API}/messages?username=${username}`);
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
