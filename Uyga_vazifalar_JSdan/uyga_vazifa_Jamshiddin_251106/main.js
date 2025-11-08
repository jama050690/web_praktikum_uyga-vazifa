const mainEl = document.querySelector(".main");
const boxEl = document.querySelector(".box");
const formEl = document.querySelector(".form_input_main");
const inputEl = document.querySelectorAll(".add_input");
const modal = document.querySelector(".form_div");

const url = "http://localhost:3600/todos";
const render = (data) => {
  boxEl.innerHTML = data
    .map((item) => {
      return `<div class="card">
                <div>
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                </div>
                <div>  
                  <button id="${item.id}_delete" class="delete_item">Delete</button>
                  <button id="${item.id}_edit" class="edit_item">Edit</button>
                </div>
              </div>`;
    })
    .join("");
};
const getData = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      render(data);
    });
};
getData();

formEl.addEventListener("submit", (e) => {
  boxEl.innerHTML = '<p class="loading">LOADING...</p>';
  e.preventDefault();
  let obj = {};
  for (let i = 0; i < inputEl.length; i++) {
    obj[inputEl[i].name] = inputEl[i].value;
    inputEl[i].value = "";
  }
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then(() => {
      console.log("successfully added new item");
      getData();
    });
});
boxEl.addEventListener("click", (e) => {
  e.preventDefault();
  const el = e.target;
  const id = el.id.slice(0, el.id.indexOf("_"));
  if (el.className === "delete_item") {
    boxEl.innerHTML = '<p class="loading">LOADING...</p>';
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then.apply(() => {
        getData();
      });
  } else if (el.className === "edit_item") {
    mainEl.innerHTML = "";
    const form = document.createElement("form");
    form.className = "form_input";
    form.innerHTML = `
              <input
                class="inputs"
                type="text"
                name="title"
                placeholder="Enter new title"
                required
                />
              <input
                class="inputs"
                type="text"
                name="description"
                placeholder="Enter new description"          
                required  
                />
            <button type="submit">Send</button>
    `;
    boxEl.innerHTML = "";

    form.addEventListener("submit", (e) => {
      boxEl.innerHTML = '<p class="loading">LOADING...</p>';
      e.preventDefault();
      const inputs = document.querySelectorAll(".inputs");
      console.log(inputs);
      const title = inputs[0].value;
      const description = inputs[1].value;
      modal.innerHTML = "";
      modal.classList.toggle("hidden");

      fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      })
        .then((res) => res.json())
        .then(() => {
          console.log("successfully updated");
          getData();
          modal.classList.toggle("hidden");
        });
    });

    modal.appendChild(form);
    modal.classList.toggle("hidden");
  }
});
