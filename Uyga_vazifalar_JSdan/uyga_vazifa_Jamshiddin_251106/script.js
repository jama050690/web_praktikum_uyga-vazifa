const formEl = document.querySelector(".form_input");
const boxEl = document.querySelector(".box");
const modal = document.querySelector(".block");
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

  boxEl.innerHTML = '<p class="loading">LOADING...</p>';
  await new Promise((r) => setTimeout(r, 0)); // 👈 repaint uchun vaqt beramiz

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
  const id = card_2?.dataset.id;
  if (!id) return;

  if (e.target.classList.contains("delete_btn")) {
    modal.innerHTML = '<p class="loading">LOADING...</p>';
    modal.classList.remove("hidden");
    await new Promise((r) => setTimeout(r, 0)); // 👈 repaint uchun

    await fetch(`${url}/${id}`, { method: "DELETE" });
    modal.classList.add("hidden");
    getData();
  }

  if (e.target.classList.contains("edit_btn")) {
    modal.innerHTML = '<p class="loading">LOADING...</p>';
    await new Promise((r) => setTimeout(r, 0)); // 👈 repaint uchun

    formEl.classList.add("hidden");
    document.querySelectorAll(".card").forEach((card) => {
      card.style.display = "none";
    });

    const editForm = document.createElement("form");
    editForm.classList.add("edit_form");
    editForm.innerHTML = `
      <input type="text" class="inputs" name="title" placeholder="New title" required />
      <input type="text" class="inputs" name="description" placeholder="New description" required />
      <button type="submit" class="save_btn">Save</button>
    `;

    modal.innerHTML = "";
    modal.appendChild(editForm);
    modal.classList.remove("hidden");

    editForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      modal.innerHTML = '<p class="loading">LOADING...</p>';
      await new Promise((r) => setTimeout(r, 0)); // 👈 repaint uchun

      const title = editForm.querySelector('input[name="title"]').value.trim();
      const description = editForm
        .querySelector('input[name="description"]')
        .value.trim();

      if (!title || !description) return alert("Fill all fields!");

      await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      modal.classList.add("hidden");
      formEl.classList.remove("hidden");
      document.querySelectorAll(".card").forEach((card) => {
        card.style.display = "block";
      });

      getData();
    });
  }
});

getData();
