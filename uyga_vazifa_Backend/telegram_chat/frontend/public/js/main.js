const usersList = document.getElementById("users");
const messageBox = document.querySelector(".message");

const loggedUser = localStorage.getItem("logged_in_user");

if (!loggedUser) {
  window.location.href = "../auth/login.html";
}

// LOAD USERS
document.getElementById("load").onclick = async () => {
  const res = await fetch("http://localhost:3000/users");
  const users = await res.json();

  usersList.innerHTML = "";
  renderUsers(users);
};

// RENDER USERS
function renderUsers(users) {
  Object.values(users).forEach((u) => {
    const li = document.createElement("li");
    li.className = "p-2 border-b cursor-pointer hover:bg-gray-100";
    li.textContent = `${u.username} (${u.email})`;

    // ⭐ USER BOSILGANDA
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

    div.className =
      m.from === "me"
        ? "bg-blue-500 text-white p-2 rounded-lg ml-auto w-fit"
        : "bg-gray-200 p-2 rounded-lg w-fit";

    div.textContent = m.text;

    messageBox.appendChild(div);
  });
}
