const darkEl = document.querySelector(".dark");
const sun = document.querySelector("dark_note_1");
const moon = document.querySelector("dark_note_2");
let son = 0;
darkEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (son === sun) {
    document.body.classList.add("line_mode");
    document.body.classList.remove("dark_mode");
    moon.style.display = "none";
    sun.style.display = "block";
    moon.style.transition = "0.5s";
    moon.hidden = true;
    son = moon;
  } else {
    document.body.classList.add("dark_mode");
    document.body.classList.remove("line_mode");
    sun.style.display = "none";
    moon.style.display = "block";
    sun.style.transition = "0.5s";
    sun.hidden = true;
    son = sun;
  }
});
