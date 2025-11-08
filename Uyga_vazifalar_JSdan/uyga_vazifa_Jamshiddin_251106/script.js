const formEl = document.querySelector(".form");
const mainEl = document.querySelector(".main");
const boxEl = document.querySelector(".box");
const blockEl = document.querySelector(".block");

const url = "http://localhost:3600/tasks";

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
      <div class="card">
        <div>
          <h1>${item.title}</h1>
          <p>${item.description}</p>
        </div>
        <div>
          <button id="${item.id}_delete" class="delete_btn">Delete</button>
          <button id="${item.id}_edit" class="edit_btn">Edit</button>
        </div>
      </div>`
    )
    .join("");
};

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = formEl.querySelector('input[name="title"]').value;
  const description = formEl.querySelector('input[name="description"]').value;

  const obj = { title, description };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    await res.json();
    getData();
    formEl.reset();
  } catch (error) {
    console.error("POST error:", error);
  }
});

boxEl.addEventListener("click", async (e) => {
  e.preventDefault();
  const el = e.target;

  // DELETE
  if (el.classList.contains("delete_btn")) {
    const id = el.id.split("_")[0];
    try {
      await fetch(`${url}/${id}`, { method: "DELETE" });
      getData();
    } catch (error) {
      console.error("DELETE error:", error);
    }
  } else if (el.classList.contains("edit_btn")) {
    const id = el.id.split("_")[0];

    const form = document.createElement("form");
    form.className = "form_input";
    form.innerHTML = `
      <input class="inputs" type="text" name="title" placeholder="Enter new title" required />
      <input class="inputs" type="text" name="description" placeholder="Enter new description" required />
      <button type="submit">Update</button>
    `;

    blockEl.innerHTML = "";
    blockEl.appendChild(form);

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const title = form.querySelector('input[name="title"]').value;
      const description = form.querySelector('input[name="description"]').value;

      const obj = { title, description };

      try {
        await fetch(`${url}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });

        getData();
        blockEl.innerHTML = "";
      } catch (error) {
        console.error("EDIT error:", error);
      }
    });
  }
});
getData();
