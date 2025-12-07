// 10. API qo'ng'iroqlar seriyasi
// Uchta ketma-ket API qo'ng'iroqlarni amalga oshiring:
// Foydalanuvchi ma'lumotlarini oling
// Foydalanuvchining postlarini oling
// Birinchi postga commentlarni oling

async function getUserData(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return res.json();
}

async function getUserPosts(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return res.json();
}

async function getPostComments(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return res.json();
}

async function running() {
  try {
    const user = await getUserData(1);
    console.log("User:", user);

    const posts = await getUserPosts(user.id);
    console.log("Posts:", posts);

    const comments = await getPostComments(posts[0].id);
    console.log("Comments of first post:", comments);
  } catch (err) {
    console.log("Xato:", err);
  }
}

running();
