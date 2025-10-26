const ismEl = document.getElementById("ism");
const yoshEl = document.getElementById("yosh");
const shahalEl = document.getElementById("shahar");
const bioEl = document.getElementById("bio");
const btnEl = document.getElementById("btn");
const foydalanuvchi_profilEl = document.getElementById("foydalanuvchi-profil");

btnEl.addEventListener("click", (PointerEvent) => {
  let name = ismEl.value;
  let age = yoshEl.value;
  let city = shahalEl.value;
  let about = bioEl.value;
  if (
    name.trim().length == 0 ||
    Number(age) == 0 ||
    city.trim().length == 0 ||
    about.trim().length == 0
  ) {
    alert("Iltimos barcha ma`lumotlarni kiriting");
  } else {
    let result = foydalanuvchi_profilEl.value;
  }
});
