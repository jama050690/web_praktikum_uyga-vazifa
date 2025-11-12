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
    <div class="main_enter_text">
      <h1 class="main_enter_title">${item.title}</h1>
      <p class="main_enter_desc">${item.description}</p>
    </div>
    <img class="main_emage" src="${baseUrl}${data.image}" alt="Photo" />
  `
    )
    .join("");
};
const bannerImageChange = async () => {
  fetch(`${baseUrl}cars`)
    .then((response) => response.json())
    .then((data) => {
      bannerImages(data[0]);
    })
    .catch((error) => {
      console.error("Error fetching banner images:", error);
    });
};
bannerImageChange();
