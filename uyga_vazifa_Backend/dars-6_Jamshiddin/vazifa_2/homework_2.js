const users = document.querySelector(".userNames");
const formEl = document.querySelector(".form");
const boxEl = document.querySelector(".box");
const inputEl = document.getElementById("input");

/**
 * JSON Placeholderdagi POSTS API dan 1ta post olib kelish funksiyasi
 * @param {*} id
 * @returns
 */
async function getPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return { name: "posts", data: await res.json() };
}

/**
 *
 * @returns
 */
async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const names = data.map((user) => user.name);

  return { resource: "users", names: names };
}

async function getAlbumById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);

  if (!res.ok) {
    return { error: `Id ${id} topilmadi` };
  }
  return { name: "albums", data: await res.json() };
}

document.addEventListener("DOMContentLoaded", (e) => {
  // 1-vazifa --> konsolga chiqarish
  console.log("1-vazifa natijasi:");

  getPostById(1).then((result) => console.log(result));

  //2-vazifa --> ekranga chiqarish
  getAllUsers().then((result) => {
    let userList = "";
    result.names.forEach((name) => {
      userList += `<p class="text-2xl text-black w-[1200px]  rounded-2xl border-1  bg-orange-400">
  ${name}
</p>`;
    });
    users.innerHTML = userList;
  });

  //3-vazifa --> ekranga chiqarish
  formEl.addEventListener("submit", async (e) => {
    e.preventDefault();

    let albumId = inputEl.value.trim();
    boxEl.innerHTML = `
    <div class="p-4 border ">
      <h2 class="text-xl font-bold mb-2">Natija:</h2>
      <p><b>ID:</b> ${albumId}</p>
      <p>Yuklanmoqda...</p>
    </div>
  `;

    const result = await getAlbumById(albumId);

    if (result.error) {
      boxEl.innerHTML += `<p>${result.error}</p>`;
    } else {
      const userId = result.data.userId;
      const title = result.data.title;

      boxEl.innerHTML = `
      <div class="p-4 ">
        <h2 class="text-xl font-bold mb-2">Natija:</h2>
        <p><b>ID:</b> ${albumId}</p>
        <p><b>User ID:</b> ${userId}</p>
        <p><b>Title:</b> ${title}</p>
      </div>
    `;
    }
  });
});
