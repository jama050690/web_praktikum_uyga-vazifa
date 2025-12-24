const usersList = document.getElementById("users");
const message = document.querySelector(".message");

// LOAD USERS
document.getElementById("load").onclick = async () => {
  const res = await fetch("http://localhost:3000/users");
  const users = await res.json();

  usersList.innerHTML = "";
  renderUsers(users);
};

// ADD USER
document.getElementById("add").onclick = async () => {
  const user = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    gender: "male",
    password: "12345",
  };

  message.addEventListener("click",(e)=>{
    e.preventDefault();
    
  })

  await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  alert("User added");
};

// DELETE USER
document.getElementById("delete").onclick = async () => {
  await fetch("http://localhost:3000/users", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "ali" }),
  });

  alert("User ali deleted");
};

// RENDER USERS
function renderUsers(users) {
  Object.values(users).forEach((u) => {
    const li = document.createElement("li");
    li.className = "p-2 border-b";
    li.textContent = `${u.username} (${u.email})`;
    usersList.appendChild(li);
  });
}
