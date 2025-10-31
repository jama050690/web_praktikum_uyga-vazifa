const form = document.querySelector(".form");
const input = document.querySelector(".input");
const box = document.querySelector(".box");

let inputList = [];

const create = () => {
  box.innerHTML = taskList.map(
    (item) => `<p> ${text}</p> 
  <button class="deleteBtn>Delete</button>
 <button class="deleteBtn>Delete</button> `
  );
};
