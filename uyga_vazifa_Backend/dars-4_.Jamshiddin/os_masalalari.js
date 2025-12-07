import os from "os";
function masala_1() {
  let result = os.totalmem();
  console.log(result);
  let result1 = os.freemem();
  console.log(result1);
  let result2 = (os.totalmem() - os.freemem()) * 1024;
  console.log(result2);
  let result3 = (os.freemem() / os.totalmem()) * 100;
  console.log(result3);
  let result4 = (result2 / os.totalmem()) * 100;
  console.log(result4);
}
masala_1();
function masala_2() {
  let result = os.networkInterfaces();
  console.log(result);
  let key = "Wi-Fi";
  console.log(result[key][0].family);
}
masala_2();
function masala_3() {
  let result = os.uptime();

  let h = Math.floor(result / 60 / 60);
  let m = Math.floor(((result % 60) % 60) / 60);
  let s = Math.floor(result % 60);

  console.log(h, m, s);
}
masala_3();

function masala_4() {
  let result = os.cpus();
  let arr = [];
  console.log(result);
  let model = result[0].model;
  arr.push(model);
  console.log(arr);
}
masala_4();
