const prompt = require("prompt-sync")();

// masala_5;
// object ni key larini va value larini alohida array olib chiqib beradigan functionlar
// yarating value uchun alohida function key uchun alohida function

let freind = {
  name: "Jumanazar",
  age: 35,
  email: "jsr_1611@globalThis.com",
  number: "+998942364495",
  course: "Fullstack",
  country: "Uzbekistan",
};

const funcKalit = (obj) => {
  let kalit = [];
  for (let key in obj) {
    kalit.push(key);
  }
  return kalit;
};

const funcQiymat = (obj) => {
  let qiymat = [];
  for (let key in obj) {
    qiymat.push(obj[key]);
  }
  return qiymat;
};

console.log("Kalit:", funcKalit(freind));
console.log("Qiymat:", funcQiymat(freind));
