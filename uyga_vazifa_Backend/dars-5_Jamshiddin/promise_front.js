const frontEl = document.querySelector(".front");

async function postName() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return { name: "posts", data: await res.json() };
}

async function todosName() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return { name: "todos", data: await res.json() };
}

Promise.race([todosName(), postName()]).then((result) => {
  let page = `<h2>${result.name}</h2>
  `;
  let items = "";
  const isTodos = result.name == "todos";
  result.data.forEach((item) => {
    let todoState = item.completed ? "completed" : "not completed";
    let item_detail = isTodos
      ? "<b>status:</b> " + todoState
      : "<b>body:</b> " + item.body;

    items += `
    <b>id:</b> ${item.id}, <b>title:</b> ${item.title}, <b>userId</b>: ${item.userId}, ${item_detail}<br>`;
  });
  page += `<p> ${items} </p>`;
  frontEl.innerHTML = page;
  console.log(result.data);
});
