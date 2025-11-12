const numberEl = document.getElementById("number");
const subBtnEl = document.getElementById("sub-btn");
const resetBtnEl = document.getElementById("reset-btn");
const addBtnEl = document.getElementById("add-btn");

subBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  let result = Number(numberEl.innerText);
  numberEl.innerText = result - 1;
});

resetBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  numberEl.innerText = 0;
});

addBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  let result = Number(numberEl.innerText);
  numberEl.innerText = result + 1;
});
