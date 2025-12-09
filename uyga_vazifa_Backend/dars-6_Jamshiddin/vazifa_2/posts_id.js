async function getPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return { name: "posts", data: await res.json() };
}
getPostById(1).then((result) => console.log(result));
