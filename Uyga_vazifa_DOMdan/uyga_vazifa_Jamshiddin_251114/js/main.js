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
        <h1>${item.name}</h1>
        <h2>${item.username}</h2>
        <p>${item.email}</p>
        <p>${item.phone}</p>
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
      name: card.querySelector("h1").textContent,
      username: card.querySelector("h2").textContent,
      email: card.querySelectorAll("p")[0].textContent,
      phone: card.querySelectorAll("p")[1].textContent,
    };

    const saved = JSON.parse(localStorage.getItem("render")) || [];
    saved.push(user);
    localStorage.setItem("render", JSON.stringify(saved));

    card.remove();
  }
});

// localStorage-dan saved cardlarni ekranga chiqarish
function renderSaved() {
  const data = JSON.parse(localStorage.getItem("render")) || [];

  if (data.length === 0) {
    shows.innerHTML = "<p>No saved users!</p>";
    return;
  }

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

// SHOW ALL → barchasini localStorage-dan chiqarish
show.addEventListener("click", () => {
  renderSaved();
});

// DELETE → localStorage va ekrandan o‘chirish
shows.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const index = e.target.dataset.id;
    const saved = JSON.parse(localStorage.getItem("render")) || [];

    saved.splice(index, 1);
    localStorage.setItem("render", JSON.stringify(saved));

    renderSaved();
  }
});
