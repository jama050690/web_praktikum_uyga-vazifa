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
        <div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
        <div>
          <button class="edit_btn">Edit</button>
          <button class="delete_btn">Delete</button>
        </div>
      </div>`
    )
    .join("");
};

const waitForRepaint = () =>
  new Promise((resolve) => requestAnimationFrame(resolve));

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  boxEl.innerHTML = '<p class="loading">LOADING...</p>';
  await waitForRepaint();

  const title = formEl.querySelector('input[name="title"]').value.trim();
  const description = formEl
    .querySelector('input[name="description"]')
    .value.trim();

  if (!title || !description) return alert("Fill all fields!");

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });

  formEl.reset();
  getData();
});

boxEl.addEventListener("click", async (e) => {
  const card = e.target.closest(".card");
  const id = card?.dataset.id;
  if (!id) return;

  if (e.target.classList.contains("delete_btn")) {
    modal.innerHTML = `
      <div class="loading">
        <div class="spinner"></div>
        <p>Deleting...</p>
      </div>`;
    modal.classList.remove("hidden");
    await waitForRepaint();

    await fetch(`${url}/${id}`, { method: "DELETE" });

    modal.classList.add("hidden");
    getData();
  }

  if (e.target.classList.contains("edit_btn")) {
    modal.innerHTML = `
      <div class="loading">
        <div class="spinner"></div>
        <p>Opening edit form...</p>
      </div>`;
    modal.classList.remove("hidden");
    await waitForRepaint();

    const editForm = document.createElement("form");
    editForm.classList.add("edit_form");
    editForm.innerHTML = `
      <input type="text" name="title" placeholder="New title" required />
      <input type="text" name="description" placeholder="New description" required />
      <button type="submit">Save</button>
    `;

    setTimeout(() => {
      modal.innerHTML = "";
      modal.appendChild(editForm);
      modal.classList.remove("hidden");
    }, 400);

    editForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      modal.innerHTML = `
        <div class="loading">
          <div class="spinner"></div>
          <p>Saving...</p>
        </div>`;
      await waitForRepaint();

      const title = editForm.querySelector('input[name="title"]').value.trim();
      const description = editForm
        .querySelector('input[name="description"]')
        .value.trim();

      await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      modal.classList.add("hidden");
      getData();
    });
  }
});

getData();
