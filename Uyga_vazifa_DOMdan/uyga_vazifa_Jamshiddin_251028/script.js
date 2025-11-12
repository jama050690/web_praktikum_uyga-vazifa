const textInput = document.getElementById("input_title");
const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");

let tasks = [];

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderList();
}

const renderList = () => {
  list.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "list_item";

    const result = document.createElement("p");
    result.textContent = task.title;
    li.appendChild(result);

    const btn = document.createElement("button");
    btn.classList.add("delete-btn");
    btn.textContent = "Delete";
    btn.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(btn);
    list.appendChild(li);
  });
};

addBtn.addEventListener("click", () => {
  const title = textInput.value.trim();
  if (title === "") {
    alert("Iltimos, matn kiriting!");
    return;
  }

  tasks.push({ id: Date.now(), title });
  renderList();
  textInput.value = "";
});
