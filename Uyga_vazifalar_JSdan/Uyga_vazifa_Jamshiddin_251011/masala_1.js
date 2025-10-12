const prompt = require("prompt-sync")();

// masala-1;
// Array ichidan Id si 2 teng objectni chiqaring (Functionda);

let users = [
  {
    user: "user1",
    id: 1,
  },
  {
    user: "user1",
    id: 2,
  },
  {
    user: "user1",
    id: 3,
  },
  {
    user: "user1",
    id: 4,
  },
];

let userId = 2;

const myId = (arr, id) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      return arr[i];
    }
  }
};

let result = myId(users, userId);
console.log(result);

// masala-1;
// Array ichidan Id si 2 teng objectni chiqaring (forda);

for (let i = 0; i < users.length; i++) {
  if (users[i].id == userId) {
    console.log(users[i]);
  }
}
