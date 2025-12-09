const users = document.querySelector(".userNames");
const formEl = document.querySelector(".form");
const boxEl = document.querySelector(".box");
const inputEl = document.getElementById("input");
async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const names = data.map((user) => user.name);

  return { resource: "users", names: names };
}

document.addEventListener("DOMContentLoaded", (e) => {
  getAllUsers().then((result) => {
    console.log(result);
    let userList = "";

    result.names.forEach((name) => {
      userList += `<li> ${name}</li>`;
    });
    users.innerHTML = userList;
  });
});

async function getAlbumById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);

  if (!res.ok) {
    return { error: `Id ${id} topilmadi` };
  }

  return { name: "albums", data: await res.json() };
}

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  let value = inputEl.value.toLowerCase().trim();
  let ids = value.split(",");

  boxEl.innerHTML = `<h2 style="color:blue,font-size:32px;"><b>Natija:</b></h2>`;

  for (let id of ids) {
    const result = await getAlbumById(id);

    if (result.error) {
      boxEl.innerHTML += `<p style="color:red">${result.error}</p>`;
    } else {
      boxEl.innerHTML += `<p>ID: ${id} → ${result.data.title}</p>`;
    }
  }
});
