const formEl = document.querySelector(".form_input");
const boxEl = document.querySelector(".box");

const url = "http://localhost:3602/todos";

const getData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    render(data);
  } catch (error) {
    console.error("GET error:", error);
  }
};

const render = (data) => {
  boxEl.innerHTML = data
    .map(
      (item) => `
      <div class="card" data-id="${item.id}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <button class="delete_btn">Delete</button>
        <button class="edit_btn">Edit</button>
      </div>`
    )
    .join("");
};

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  const titleInput = formEl.querySelector('input[name="title"]');
  const descInput = formEl.querySelector('input[name="description"]');

  const title = titleInput.value.trim();
  const description = descInput.value.trim();

  if (!title || !description) return alert("Fill all fields!");

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    formEl.reset();
    getData();
  } catch (error) {
    console.error("POST error:", error);
  }
});
boxEl.addEventListener("click", async (e) => {
  const card_2 = e.target.closest(".card");
  const id = card_2.dataset.id;

  if (e.target.classList.contains("delete_btn")) {
    await fetch(`${url}/${id}`, { method: "DELETE" });
    getData();
  }

  if (e.target.classList.contains("edit_btn")) {
    card_2.innerHTML = `
      <form class="edit_form">
        <input type="text" class="inputs" name="title" placeholder="New title" required />
        <input type="text"  class="inputs" name="description" placeholder="New description" required />
        <button type="submit">Save</button>
      </form>
    `;

    const editForm = card_2.querySelector(".edit_form");

    editForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const title = editForm.querySelector('input[name="title"]').value;
      const description = editForm.querySelector(
        'input[name="description"]'
      ).value;

      await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      getData();
    });
  }
});

getData();
