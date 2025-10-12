const prompt = require("prompt-sync")();

// masala-2;
// Array ichidan oyliklarni yig'indisini hisoblash kerak. (Functionda);

let users = [
  {
    user: "user1",
    id: 1,
    salary: 600,
  },
  {
    user: "user1",
    id: 2,
    salary: 500,
  },
  {
    user: "user1",
    id: 3,
    salary: 300,
  },
  {
    user: "user1",
    id: 4,
    salary: 200,
  },
];

const mySalary = (arrSal) => {
  let natija = 0;
  for (let i = 0; i < arrSal.length; i++) {
    natija += arrSal[i].salary;
  }
  return natija;
};
let result = mySalary(users);
console.log(result);

// Array ichidan oyliklarni yig'indisini hisoblash kerak. (Forda);
let yigindi = 0;
for (let i = 0; i < users.length; i++) {
  yigindi += users[i].salary;
}
console.log(yigindi);
