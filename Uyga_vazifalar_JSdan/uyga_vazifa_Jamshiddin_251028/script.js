const titleInput = document.getElementById("input_title");
const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
const delBtn = document.getElementById("delBtn");

let tasks = [];

const nowBet = () => {};

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Yangi element " + Date.now();
  list.appendChild(li);
});

delBtn.addEventListener("click", () => {
  if (list.lastChild) {
    list.lastChild.remove();
  }
});

// const userInput = document.querySelector(".input");
// const userForm = document.querySelector(".form");
// const box = document.querySelector(".box");
// // /////////////////////////////////////////////

// let tasks = [];

// const render = () => {
//   box.innerHTML = "";

//   for (let i = 0; i < tasks.length; i++) {
//     let title = document.createElement("h1");
//     title.textContent = tasks[i].title;
//     // h1
//     let btn = document.createElement("button");
//     btn.textContent = "Delete";
//     btn.className = "deleteBtn";
//     btn.id = tasks[i].id;
//     // btn
//     let wrapper = document.createElement("div");
//     wrapper.className = "block";
//     wrapper.append(title, btn);
//     // wrapper
//     box.append(wrapper);
//   }
// };

// userForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   tasks.push({ title: userInput.value, id: Date.now() });
//   userInput.value = "";
//   render();
// });

// box.addEventListener("click", (e) => {
//   const el = e.target;
//   if (el.className === "deleteBtn") {
//     for (let i = 0; i < tasks.length; i++) {
//       if (tasks[i].id == el.id) {
//         tasks.splice(i, 1);
//       }
//     }
//   }

//   render();
// });
