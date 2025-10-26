const ismEl = document.getElementById("ism");
const yoshEl = document.getElementById("yosh");
const shaharEl = document.getElementById("shahar");
const bioEl = document.getElementById("bio");
const btnEl = document.getElementById("btn");
const foydalanuvchi_profilEl = document.getElementById("foydalanuvchi-profil");

btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  let name = ismEl.value.trim();
  let age = yoshEl.value;
  let city = shaharEl.value.trim();
  let bio = bioEl.value.trim();
  if (name.length == 0 || Number(age) == 0 || city.length == 0) {
    alert("Iltimos barcha ma`lumotlarni kiriting");
  } else {
    foydalanuvchi_profilEl.innerText = `
    Foydalanuvchi profili\n
    Ism: ${name}\n 
    Yosh: ${age}\n
    Shahar: ${city}\n
    Bio: ${bio.length == 0 ? "Ma'lumot mavjud emas" : bio} `;
  }
});
