const formEl = document.querySelector(".form_input_main");
const inputEl = document.querySelectorAll(".add_input");
const main = document.querySelector(".main");
const modal = document.querySelector(".form_div");

const url = "http://localhost:3600/todos";
const render = (data) => {
  console.log("man renderdaman.", data);

  boxEl.innerHTML = data
    .map((item) => {
      return `<div class="card">
                <h1>${item.title}</h1>
                <p>${item.description}</p>
                <button id="${item.id}_delete" class="delete_item">Delete</button>
                <button id="${item.id}_edit" class="edit_item">Edit</button>
              </div>`;
    })
    .join("");
};
const getData = () => {
  console.log("get data chaqiruvi");

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("Great! Man galdim~!");

      render(data);
    });
};
getData();
console.log("Man formEla event qo'shaman.");

formEl.addEventListener("submit", (e) => {
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
    boxEl.innerHTML = <p class="loading">LOADING...</p>;
    fetch(`${url}/${el.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then.apply(() => {
        getData();
      });
  } else if (el.className === "edit_item") {
    boxEl.innerHTML = <p class="loading">LOADING...</p>;
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
                placeholder="Enter your change text"          
              />
            <button type="submit">Send</button>
    `;
    boxEl.innerHTML = "";
    // boxEl.classList.add("active");
    // boxEl.id = el.id;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = document.querySelectorAll(".inputs");
      console.log(inputs);
      const title = inputs[0].value;
      const description = inputs[1].value;
      boxEl.innerHTML = <p class="loading">LOADING...</p>;
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

    // boxEl.appendChild(form);
    modal.appendChild(form);
    modal.classList.toggle("hidden");
  }
});
