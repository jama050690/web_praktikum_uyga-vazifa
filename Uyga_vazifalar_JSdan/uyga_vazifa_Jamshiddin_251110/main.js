const darkEl = document.querySelector(".dark_note");

darkEl.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dark_mode");
});
