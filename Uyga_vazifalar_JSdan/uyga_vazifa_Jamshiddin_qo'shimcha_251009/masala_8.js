const prompt = require("prompt-sync")();
// 10-topshiriq.
// Shunday object yaratingki uni palindrom() nomli methodi bolsin.
// Palindrom so‘zni tekshiring (stringni teskari qilib solishtiring). "aka" → "Palindrom" "salom" → "Palindrom emas"

const userWord = {
  word: "",
  palindrom: function (soz) {
    this.word = soz;
    let teskari = this.word.split("").reverse().join("");
    if (this.word === teskari) {
      console.log("Palindrom");
    } else {
      console.log("Palindrom emas");
    }
  },
};
userWord.palindrom("aka");
userWord.palindrom("salom");
