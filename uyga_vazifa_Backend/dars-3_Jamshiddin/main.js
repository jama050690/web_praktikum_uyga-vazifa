//1
// raqamlar va matematic amallar ishlatmasdan console da 5 raqamini chiqaring

//2

console.log(0.1 + 0.2 == 0.3);

//3

console.log((0.1 + 0.2).toFixed(2) + 2);

//4

console.log(1 > 2 < 3);

//5

let arr = [2, 3, 4];
console.log(arr.indexOf(1) - -2);

//6

console.log(arr.join(" ").length);

//7

let p = "hello";
console.log(p.split(","));

//8

console.log(0 || ("hello" && 1));

//9

console.log([] + []);

//10

console.log((() => {})() + 1);

//11

console.log(typeof NaN, typeof (NaN + "1"), typeof typeof NaN);

//12

console.log(true ? (false ? 1 : 2) : 3);

//13

function f(a, b, c, d, e) {}
console.log(f.length);

//14

let fruits = ["apple", "banana", "cherry"];

console.log(fruits.push("orange"), fruits.pop("orange"));

//15

let str = "a b";
str.replace("a", "c");
console.log(str);

//16

let numbers = [1, 2, 3, 4];

numbers.forEach((a, index, numbers) => {
  console.log((a = a * 2));
  numbers[index] = a;
});

console.log(numbers);
