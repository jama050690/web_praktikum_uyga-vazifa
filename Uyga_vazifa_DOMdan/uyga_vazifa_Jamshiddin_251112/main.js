const darkEl = document.querySelector(".dark");
const sun = document.querySelector(".dark_note_2");
const moon = document.querySelector(".dark_note_1");
const main_enter_content = document.querySelector(".main_enter_content");
const baseUrl = "https://cars-project-six.vercel.app/";

// Dark mode
let isDark = false;

darkEl.addEventListener("click", (e) => {
  e.preventDefault();
  isDark = !isDark;

  if (isDark) {
    document.body.classList.add("dark_mode");
    document.body.classList.remove("light_mode");
    sun.style.display = "block";
    moon.style.display = "none";
  } else {
    document.body.classList.add("light_mode");
    document.body.classList.remove("dark_mode");
    sun.style.display = "none";
    moon.style.display = "block";
  }
});
// Banner images change
const bannerImages = (data) => {
  main_enter_content.innerHTML = data
    .map(
      (item) => `
      <div class="main_enter_box">
    <div class="main_enter_text">
      <h1 class="main_enter_title">${item.model}</h1>
    </div>
    <img class="main_emage" src="${item.image}" alt="Photo" />
  </div>
    `
    )
    .join("");
};
const bannerImageChange = () => {
  fetch("https://cars-project-six.vercel.app/api/banners")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      bannerImages(data);
    })
    .catch((err) => console.error("Fetch error:", err));
};

bannerImageChange();
