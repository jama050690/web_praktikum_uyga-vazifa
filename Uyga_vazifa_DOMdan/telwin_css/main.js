const choose_list = document.querySelector(".choose_list");
const boxEl = document.querySelector(".banner-box");
const darkEl = document.getElementById("dark");
const modeIcon = document.getElementById("modeIcon");
const allBtn = document.getElementById("viewAllCarsBtn");
const footer_btn = document.querySelector(".footer_btn ");
const baseUrl = "https://cars-project-six.vercel.app";

// Dark mode menu
const MODE = "mode";
let isDark = false;

darkEl.addEventListener("click", (e) => {
  e.preventDefault();
  isDark = !isDark;
  localStorage.setItem(MODE, isDark);
  changeMode();
});

document.addEventListener("DOMContentLoaded", () => {
  const currentMode = localStorage.getItem(MODE);
  if (currentMode !== null) {
    isDark = currentMode === "true";
  }
  changeMode();
});

const changeMode = () => {
  if (isDark) {
    document.body.classList.add("dark_mode");
    document.body.classList.remove("light_mode");
    modeIcon.src = "./images/Sun_mode.svg";
  } else {
    document.body.classList.add("light_mode");
    document.body.classList.remove("dark_mode");
    modeIcon.src = "./images/Dark_mode.svg";
  }
};

// login section
document.querySelector(".login").addEventListener("click", () => {
  window.location.href = "./auth/login.html";
});

// render Banner
let bannerImages = [];
let bannerImageIndex = 0;
const changeBannerImage = (index) => {
  const item = bannerImages[index];
  boxEl.innerHTML = `
    <div class="relative w-full h-full">
      
      <img class="w-full  h-[500px] object-cover rounded-xl" src="${item.image}" />
      
      <h1 class="absolute left-1/2 top-[80px] -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">${item.model}</h1>
    
      <div class="absolute left-8 right-[40px] bottom-[20px] flex justify-between">
        <div id="carusel-btn-list-left" class="flex items-center gap-2"></div>
        <div id="carusel-btn-list-right" class="flex gap-3">
            <div class="btn-arrow text-3xl active:bg-[var(--login-color)] px-4 py-2 rounded-full bg-white cursor-pointer text-black">&lt;</div>
            <div class="btn-arrow text-3xl active:bg-[var(--login-color)]  px-4 py-2 rounded-full bg-white cursor-pointer text-black">&gt;</div>
        </div>
      </div>

    </div>
  `;

  addEventsToBannerBtnsRight();
  addEventsToBannerBtnsLeft();
};

// fetch banner images from API
const getBannerImages = () => {
  fetch(`${baseUrl}/banners`)
    .then((res) => {
      console.log("STATUS =", res.status);
      return res.json();
    })
    .then((data) => {
      console.log("FETCH DATA =", data);
      bannerImages = data;
      changeBannerImage(bannerImageIndex);
    })
    .catch((err) => console.error("FETCH ERROR =", err));
};

const addEventsToBannerBtnsRight = () => {
  const btnList = document.getElementById("carusel-btn-list-right").children;

  const leftArrow = btnList[0];
  const rightArrow = btnList[1];

  const nextLeftImageIndex =
    bannerImageIndex === 0 ? bannerImages.length - 1 : bannerImageIndex - 1;

  const nextRightImageIndex =
    bannerImageIndex === bannerImages.length - 1 ? 0 : bannerImageIndex + 1;

  leftArrow.addEventListener("click", () => {
    bannerImageIndex = nextLeftImageIndex;
    changeBannerImage(bannerImageIndex);
  });

  rightArrow.addEventListener("click", () => {
    bannerImageIndex = nextRightImageIndex;
    changeBannerImage(bannerImageIndex);
  });
};

const addEventsToBannerBtnsLeft = () => {
  const div = document.getElementById("carusel-btn-list-left");

  div.innerHTML = "";

  for (let i = 0; i < bannerImages.length; i++) {
    const btn = document.createElement("div");

    btn.className =
      i === bannerImageIndex ? "carusel-btn btn-long" : "carusel-btn btn-short";

    if (i !== bannerImageIndex) {
      btn.addEventListener("click", () => {
        bannerImageIndex = i;
        changeBannerImage(bannerImageIndex);
      });
    }

    div.appendChild(btn);
  }
};

// Render list of cars based on chosen model
const catalogEl = (data) => {
  choose_list.innerHTML = data
    .map(
      (item) => `
             <li class="car_card w-[387px] rounded-2xl hover:translate-y-[-8px] transition-all duration-300 ease-out 
               cursor-pointer px-6 py-7.5 bg-[var(--bgc)] shadow-[0_10px_25px_rgba(0,0,0,0.08)]
                 hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)]"> 
                  <h3 class="car_model font-family[var(--font-family)]  my-2 text-2xl color-[var(--text-color) ]font-semibold ">${item.model}</h3>
                    <p class="text-base font-family[var(--font-family)] my-2 color-[var(--text-color) font-medium">Economy Car</p>
                     <img src="${item.image}" alt="${item.model}" />
                      <div class="my-4 flex gap-x-16.5 gap-y-6 flex-wrap">
                     <p class="flex items-center gap-2">
                    <i class="fa-solid fa-gears"></i>5 Seats</p>
                   <p class="flex items-center gap-2"><i class="fa-solid fa-car"></i>Automatic</p>
                  <p class="flex items-center gap-2"><i class="fa-regular fa-calendar"></i>${item.year}</p>
                <p class="flex items-center gap-2"><i class="fa-solid fa-sack-dollar"></i> ${item.priceEstimate}</p>
              </div>
            </li>`
    )
    .join("");

  activateListModal();
};

// fetch list of cars from API
const fetchCatalog = (cars) => {
  fetch(`https://cars-project-six.vercel.app/${cars}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      catalogEl(data);
    })
    .catch((err) => console.error("Fetch error:", err));
};
const buttons = document.querySelectorAll(".car_btn");

document.addEventListener("DOMContentLoaded", () => {
  getBannerImages();
  fetchCatalog("bmw");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // remove active from all
      buttons.forEach((b) => b.classList.remove("active"));

      // add to clicked
      btn.classList.add("active");

      // API
      const brand = btn.innerText.toLowerCase();
      fetchCatalog(brand);
    });
  });
});

// MODAL YARATISH (Tailwind bilan)
const zoomBg = document.createElement("div");
zoomBg.className =
  "fixed inset-0 bg-black/60 hidden flex justify-center items-center z-[999]";

// card
const zoomCard = document.createElement("div");
zoomCard.className =
  "relative p-4 rounded-xl bg-[var(--bgc)] w-[620px] max-h-[85vh] overflow-hidden transform scale-75 transition duration-300 shadow-xl";

// content
const zoomContent = document.createElement("div");
zoomContent.className = "modal-body";

// close
const zoomClose = document.createElement("span");
zoomClose.className =
  "absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white text-xl cursor-pointer hover:bg-red-700 transition";

zoomClose.innerHTML = "&times;";

zoomCard.appendChild(zoomClose);
zoomCard.appendChild(zoomContent);
zoomBg.appendChild(zoomCard);
document.body.appendChild(zoomBg);

//  model Close actions
zoomClose.onclick = () => {
  zoomCard.classList.remove("scale-100");
  zoomCard.classList.add("scale-75");
  zoomBg.classList.add("hidden");
};

zoomBg.onclick = (e) => {
  if (e.target === zoomBg) {
    zoomCard.classList.remove("scale-100");
    zoomCard.classList.add("scale-75");
    zoomBg.classList.add("hidden");
  }
};

// model Open function
function activateListModal() {
  const cards = document.querySelectorAll(".car_card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      zoomContent.innerHTML = card.innerHTML;

      zoomBg.classList.remove("hidden");

      setTimeout(() => {
        zoomCard.classList.remove("scale-75");
        zoomCard.classList.add("scale-100");
      }, 20);
    });
  });
}

//view all cars button

allBtn.addEventListener("click", () => {
  fetch("https://cars-project-six.vercel.app/all")
    .then((res) => res.json())
    .then((data) => {
      currentBrandCars = data; // barcha mashinalar
      catalogEl(data); // kartalarni chizish

      const pagination = document.getElementById("pagination");
      if (pagination) pagination.innerHTML = "";

      // yangi kartalarga modal event berish
      activateListModal();
    });
});

// search button
let currentBrandCars = []; 
let currentPage = 1;
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase().trim();

  document.querySelectorAll(".car_card").forEach((card) => {
    const model = card.querySelector(".car_model").textContent.toLowerCase();

    if (model.includes(value)) {
      card.style.display = "block"; // ko‘rinadi
    } else {
      card.style.display = "none"; // yashirinadi
    }
  });
});
// footer btn
footer_btn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
