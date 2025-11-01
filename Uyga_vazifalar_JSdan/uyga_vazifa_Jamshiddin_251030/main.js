// const formEl = document.querySelector(".form");
// const inputEl = document.querySelector(".input");
// const boxEl = document.querySelector(".block");

// let inputList = [];

// const refreshUI = () => {
//   boxEl.innerHTML = inputList
//     .map(
//       (item) => `
//         <div class="item">
//           <p>${item.text}</p>
//           <div class="btn_box">
//             <button class="deleteBtn" id="${item.id}">Delete</button>
//             <button class="editBtn" id="${item.id}">Edit</button>
//           </div>
//         </div>
//       `
//     )
//     .join("");
// };
// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();

//   inputList.push({ text: inputEl.value, id: Date.now() });
//   inputEl.value = "";
//   refreshUI();
// });
// boxEl.addEventListener("click", (e) => {
//   const obj = e.target;
//   console.log(obj);

//   if (obj.className === "deleteBtn") {
//     inputList = inputList.filter((item) => item.id !== Number(obj.id));
//   }
//   if (obj.className === "editBtn") {
//     const existingObj = inputList.find((item) => item.id === Number(obj.id));
//     const newText = prompt("", existingObj.text);
//     inputList = inputList.map((item) =>
//       item.id === Number(obj.id) ? { ...item, text: newText } : item
//     );
//   }

//   refreshUI();
// });

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
          <div class="btn_box">
            <button class="deleteBtn" id="${item.id}">Delete</button>
            <button class="editBtn" id="${item.id}">Edit</button>
          </div>
        </div>
      `
    )
    .join("");
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = inputEl.value.trim();
  if (!text) return;

  const isDuplicate = inputList.some(
    (item) => item.text.toLowerCase() === text.toLowerCase()
  );

  if (isDuplicate) {
    alert("Bu matn allaqachon mavjud!");
    return;
  }

  inputList.push({ text, id: Date.now() });
  inputEl.value = "";
  refreshUI();
});

boxEl.addEventListener("click", (e) => {
  const obj = e.target;

  if (obj.className === "deleteBtn") {
    inputList = inputList.filter((item) => item.id !== Number(obj.id));
  }

  if (obj.className === "editBtn") {
    const existingObj = inputList.find((item) => item.id === Number(obj.id));
    const newText = prompt("Yangi matnni kiriting:", existingObj.text);
    if (!newText) return;

    const isDuplicate = inputList.some(
      (item) =>
        item.text.toLowerCase() === newText.toLowerCase() &&
        item.id !== Number(obj.id)
    );
    if (isDuplicate) {
      alert("Bu matn allaqachon mavjud!");
      return;
    }

    inputList = inputList.map((item) =>
      item.id === Number(obj.id) ? { ...item, text: newText } : item
    );
  }

  refreshUI();
});
