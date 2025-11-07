const boxEl = document.querySelector(".box");
const formEl = document.querySelector(".form_input");
const inputEl = document.querySelectorAll(".add-input");
const main = document.querySelector(".main");

const url = "http://localhost:3600";
const render = (data) => {
  box.innerHTML = data
    .map((item) => {
      return `    <div class="card">
      <h1>${item.title}</h1>
      <p>${item.descreption}</p>
      <button id="${item.id}" class="delete_item">Delete</button>
      <button id="${item.id}" class="delete_edit">Edit</button>
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

formEl.addEvenListener("submit", (e) => {
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
      getData();
    });
});
box.addEvenListener("click", (e) => {
  box.innerHTML = `<p class="loading">LOADING...</p>`;
  const el = e.target;
  if (el.className === "delete_item") {
    fetch(`${url}/${el.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then.apply(() => {
        getData();
      });
  }
  if (el.className === "edit_item") {
    const form = document.createElement("form");
    form.className = "form_input";

    form.innerHTML = `
              <input
            class="inputs"
            type="text"
            name="title"
            placeholder="Enter your change text"
          />
                    <input
            class="inputs"
            type="text"
            name="descreption"
            placeholder="Enter your change text"          />
            <button type="submit">Send</button>
    `;
    boxEl.innerHTML = "";
    boxEl.appendChild(form);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let obj = {};
      for (let i = 0; i < inputs.length; i++) {
        obj[inputs[i].name] = inputs[i].value;
        inputs2[i].value = "";
      }

      fetch(`${url}/${modal.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((res) => res.json())
        .then(() => {
          getData();
          modal.classList.remove("active");
        });
    });
  }
  boxEl.innerHTML = `<p class="loading">LOADING...</p>`;
  modal.classList.add("active");
  modal.id = el.id;
  // const title = prompt("Title");
  // const descreption = prompt("Descreption");
  fetch(`${url}/${el.id}`, {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, descreption }),
  })
    .then((res) => res.json())
    .then.apply(() => {
      getData();
    });
});
