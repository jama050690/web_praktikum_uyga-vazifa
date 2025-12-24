const usersList = document.getElementById("users");
const messageBox = document.querySelector(".message");
//  logged user
const loggedUser = localStorage.getItem("logged_in_user");

if (!loggedUser) {
  window.location.href = "./auth/login.html";
}

//  DOM tayyor bo‘lganda
document.addEventListener("DOMContentLoaded", () => {
  const loadBtn = document.getElementById("load");

  if (loadBtn) {
    loadBtn.onclick = () => {
      console.log("Load clicked");
    };
  }
});

// RENDER USERS
function renderUsers(users) {
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
}
// LOAD MESSAGES
async function loadMessages(username) {
  const res = await fetch(
    `http://localhost:3000/messages?username=${username}`
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
