const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
let tasks = [];

function add() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Iltimos ma'lumot kiriting");
    return;
  }

  const task = {
    id: Date.now(),
    task: taskText,
    completed: false,
  };

  tasks.push(task);
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t.task + " ";
    const btn = document.createElement("button");
    btn.id = t.id;
    btn.classList.add("delete-btn");
    btn.textContent = "Delete";
    btn.addEventListener("click", () => deleteTask(t.id));
    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

addBtn.addEventListener("click", add);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") add();
});

const deleteTask = (id) => {
  tasks = tasks.filter((item) => item.id != id);
  renderTasks();
};
