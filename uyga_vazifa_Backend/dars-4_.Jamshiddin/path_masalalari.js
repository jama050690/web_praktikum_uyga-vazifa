console.log("masala_1");

import { log } from "console";
import path from "path";

function masala_1() {
  let result = path.join("/users / jakhongir /documents / project / index.js");
  console.log(result);
}
masala_1();

console.log("masala_2");

function masala_2() {
  let result = path.basename("c:/projects/app/index.js");
  let result3 = path.parse(result).name;
  let result1 = path.extname("c:/projects/app/index.js");
  let result2 = path.dirname("c:/projects/app/index.js");

  console.log(result, result3, result1, result2);
}
masala_2();
console.log("masala_3");

function masala_3() {
  let result = path.parse("/home/user/test/data.txt");
  console.log(result);
}
masala_3();

console.log("masala_4");
function masala_4() {
  let result = path.isAbsolute("/users/test/a.js");
  let result1 = path.isAbsolute("users/test/a.js");
  console.log(result, result1);
}
masala_4();

console.log("masala_5");

function masala_5() {
  let result = path.normalize("users//jakhongir///desktop/project//index.js");
  console.log(result);
}
masala_5();

console.log("masala_6");

function masala_6() {
  let result = path.resolve("project", "src", "utils", "helper.js");
  console.log(result);
}
masala_6();
