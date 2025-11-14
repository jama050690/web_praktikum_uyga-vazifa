document.addEventListener("DOMContentLoaded", () => {
  const shows = document.querySelector(".shows");
  const box = document.querySelector(".box");
  const show = document.querySelector(".showAll");
  const url = "https://jsonplaceholder.typicode.com/";

  // API dagi userlarni chiqarish
  const render = (data) => {
    box.innerHTML = data
      .map(
        (item) => `
      <div class="card">
        <h1 class="name">${item.name}</h1>
        <h2 class="username">${item.username}</h2>
        <p class="email">${item.email}</p>
        <p class="phone">${item.phone}</p>
        <button class="saveBtn" type="button">Save</button>
      </div>`
      )
      .join("");
  };

  // BackEnd dan ma'lumot olish
  const getElement = () => {
    fetch(`${url}/users`)
      .then((res) => res.json())
      .then((data) => render(data));
  };
  getElement();

  // SAVE → localStorage-ga saqlash va kartani ekrandan yo‘qotish
  box.addEventListener("click", (e) => {
    if (e.target.classList.contains("saveBtn")) {
      const card = e.target.closest(".card");

      const user = {
        name: card.querySelector(".name").textContent,
        username: card.querySelector(".username").textContent,
        email: card.querySelector(".email").textContent,
        phone: card.querySelector(".phone").textContent,
      };

      // localdan arrayni olamiz
      const saved = JSON.parse(localStorage.getItem("users")) || [];

      // yangi obyektni massivga qo‘shamiz
      saved.push(user);

      // qayta localga yozamiz
      localStorage.setItem("users", JSON.stringify(saved));

      // cardni o‘chir
      card.remove();
    }
  });

  // localStorage-dan saved cardlarni ekranga chiqarish
  function renderSaved() {
    const data = JSON.parse(localStorage.getItem("users")) || [];

    // Har safar yangidan chizish kerak
    shows.innerHTML = data
      .map(
        (item, index) => `
      <div class="card_1">
        <h1>${item.name}</h1>
        <h2>${item.username}</h2>
        <p>${item.email}</p>
        <p>${item.phone}</p>
        <button class="delete" data-id="${index}" type="button">Close</button>
      </div>
    `
      )
      .join("");
  }

  //  SHOW ALL tugmasini ishlatish uchun
  let isShown = false;

  show.addEventListener("click", () => {
    if (!isShown) {
      renderSaved();
      isShown = true;
      console.log("bthu");
    }
  });

  // DELETE → localStorage va ekrandan o‘chirish
  shows.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      const index = e.target.dataset.id;

      const saved = JSON.parse(localStorage.getItem("users")) || [];

      saved.splice(index, 1);

      localStorage.setItem("users", JSON.stringify(saved));

      renderSaved();
    }
  });
});
