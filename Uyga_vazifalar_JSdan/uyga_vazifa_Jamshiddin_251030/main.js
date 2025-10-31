const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const boxEl = document.querySelector(".block");

let inputList = [];

const refreshUI = () => {
  boxEl.innerHTML = inputList
    .map(
      (item) => `
        <div class="item">
          <p>${item.text}</p>
          <button class="deleteBtn" id="${item.id}">Delete</button>
          <button class="editBtn" id="${item.id}">Edit</button>
        </div>
      `
    )
    .join("");
};
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  inputList.push({ text: inputEl.value, id: Date.now() });
  inputEl.value = "";
  refreshUI();
});
boxEl.addEventListener("click", (e) => {
  const obj = e.target;
  console.log(obj);

  if (obj.className === "deleteBtn") {
    inputList = inputList.filter((item) => item.id !== Number(obj.id));
  }
  if (obj.className === "editBtn") {
    const newText = prompt("");
    inputList = inputList.map((item) =>
      item.id === Number(obj.id) ? { ...item, text: newText } : item
    );
  }

  refreshUI();
});
