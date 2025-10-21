// Masala_1;
// Quyidagi arreydani 3-o'rinida turgan so'zini o'chirib "right",Metodlarni foydalanish mumkin.

let arr = ["I", "studty", "JAvaScript", "right", "nov"];
const arrRight = () => {
  let newArr = arr.splice(3, 1);
  return newArr;
};
let result = arrRight();
console.log(result);

// Masala_2;
// "Salomdunyo" degan so'zni teskari qilib "oynudmolas"  qaytaruvchi function yozing;
let str = "Salomdunyo";
const teskari = () => {
  let newStr = str.split("").reverse([]).join("");
  return newStr;
};
let result1 = teskari();
console.log(result1);

// Masala_3;
// "1java2script35deve6lo4per" shu string orasidan sonlarni bitta arraygga solib so'zlarni boshqa bir stringa o'zlashtirsing va return qiling;
let strNum = "1java2script35deve6lo4per";

const sonNumber = () => {
  let numbers = [];
  let letters = "";

  for (let i = 0; i < strNum.length; i++) {
    if (!isNaN(strNum[i]) && strNum[i] !== " ") {
      numbers.push(Number(strNum[i]));
    } else {
      letters += strNum[i];
    }
  }

  return { numbers, letters };
};

let result2 = sonNumber();
console.log(result2);

// Masala-4; Arreydagi sonlarni musbatini qo'shib qaytaring ya'ni return qiladigan function yozing.
let numbers = [1, -5, 2, 3, -7];

const musbatYigindi = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
};

let result3 = musbatYigindi(numbers);
console.log(result3);

// masala-5;
let users = [
  {
    name: "Ali",
    age: 35,
    salary: 23510,
  },
  {
    name: "ali",
    age: 35,
    salary: 23530,
  },
  {
    name: "ali",
    age: 35,
    salary: 23500,
  },
];
function maxsalary() {
  let maxuser = users[0];
  for (let i = 1; i < users.length; i++) {
    if (users[i].salary > maxuser.salary) {
      maxuser = users[i];
    }
  }
  return maxuser;
}

console.log(maxsalary());

// Masala-6
// Array ichidagi juft raqamlarni boshqa arrayga oling.
let arrJuft = [1, 2, 4, 6, 7];
let natija = [];

const arrDouble = () => {
  for (let i = 0; i < arrJuft.length; i++) {
    if (arrJuft[i] % 2 === 0) {
      natija.push(arrJuft[i]);
    }
  }
  return natija;
};

let result4 = arrDouble();
console.log(result4);

// masala-7;
// Array ichidagi objectlarni id gako'ra ma'lumotarini chiqaruvchi function tuzing

let users1 = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Vali", age: 30 },
  { id: 3, name: "Hasan", age: 22 },
];
const arrId = (id) => {
  for (let i = 0; i < users1.length; i++) {
    if (users1[i].id === id) {
      return users1[i];
    }
  }
  return " id topilmadi!";
};

console.log(arrId(2));
//masala_8;
// String holda raqamlar beriladi va uni teskari arrayga aylantiruvchi funksiya tuzing.
let str3 = "34567";
const arrSon = () => {
  return str3.split("").reverse().map(Number);
};

console.log(arrSon());
