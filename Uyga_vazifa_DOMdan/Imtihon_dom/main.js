const darkEl = document.querySelector(".dark");
const sun = document.querySelector(".dark_note_2");
const moon = document.querySelector(".dark_note_1");
const login = document.querySelector(".login");
const seller_list_two = document.querySelector(".seller_list_two");
const seller_list_item = document.querySelectorAll(".seller_list_item");
const url = "https://fake-store-six-peach.vercel.app";

// Dark mode
var isDark = false;

darkEl.addEventListener("click", (e) => {
  e.preventDefault();
  isDark = !isDark;
  localStorage.setItem("mode", `${isDark}`);
  changeMode();
});

const changeMode = () => {
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
};

const catalogEl = (data) => {
  seller_list_two.innerHTML = data
    .map(
      (item) => `<li class="seller_list_two_items">
                <img src="${item.image}" alt="Nike" />
                <div class="seller_card_body">
                  <p class="seller_list_two_items_text">
                    ${item.title}
                  </p>
                  <img src="./images/Stars.svg" alt="Stars" />
                  <div class="seller_text">
                    <p class="narx">$534,33</p>
                    <p class="skidka">
                      <b>24% Off</b>
                    </p>
                  </div>
                  <p class="price"${item.count}>
                    <b>$299,43</b>
                  </p>
                </div>
              </li>`
    )
    .join("");

  activateListModal();
};

// fetch list of cars from API
const fetchCatalog = (cars) => {
  fetch("https://fake-store-six-peach.vercel.app/all")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      catalogEl(data);
    })
    .catch((err) => console.error("Fetch error:", err));
};
// Choose section buttons
seller_list_item.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const category = item.getAttribute("value");

    fetchCatalog(category);

    seller_list_item.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});
