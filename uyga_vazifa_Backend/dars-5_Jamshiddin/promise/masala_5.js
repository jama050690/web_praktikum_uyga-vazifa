// 5. Promise.race() dan foydalanish
// Uchta Promise yarating va Promise.race() yordamida eng tez bajariliganini toping.
// Sizning kodingiz

async function posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return { name: "posts", data: await res.json() };
}

async function todos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return { name: "todos", data: await res.json() };
}

async function alboms() {
  const res = await fetch("https://jsonplaceholder.typicode.com/alboms");
  return { name: "alboms", data: await res.json() };
}

Promise.race([todos(), alboms(), posts()]).then((result) => {
  console.log(result.name);
});
