import path from "path";
// Fayl nomidan faqat kengaytmani ajrating
// path.extname() yordamida example.backup.data.txt faylidan .txt ni ajrating.
function masala_4() {
  var res = path.extname("/example/backup/data.txt");
  console.log(res);
}
masala_4();
