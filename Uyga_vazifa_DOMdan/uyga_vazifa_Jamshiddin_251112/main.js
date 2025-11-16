const darkEl = document.querySelector(".dark");
const sun = document.querySelector(".dark_note_2");
const moon = document.querySelector(".dark_note_1");
const main_enter_content = document.querySelector(".main_enter_content");
const choose_list = document.querySelector(".choose_list");
const form_input = document.querySelector(".form_input");
const buttons = document.querySelectorAll(".choose_button");
const dropdowns = document.querySelectorAll(".dropdown");

let zoomBg;
let zoomCard;
let zoomClose;

const baseUrl = "https://cars-project-six.vercel.app/";
var bannerImages = [];

var bannerImageIndex = 0;

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

// Banner images change
const changeBannerImage = (index) => {
  const item = bannerImages[index];
  main_enter_content.innerHTML = `
    <div class="main_enter_box">
      <div class="main_enter_text">
        <h1 class="main_enter_title">${item.model}</h1>
      </div>
      <img class="main_image" src="${item.image}" alt="Photo" />
      <div id="carusel-btn-list-right">
        <div class="btn-arrow"> < </div>
        <div class="btn-arrow"> > </div>
      </div>
      <div id="carusel-btn-list-left">
      </div>
    </div>
    `;
  addEventsToBannerBtnsRight();
  addEventsToBannerBtnsLeft();
};

// fetch banner images from API
const getBannerImages = () => {
  fetch("https://cars-project-six.vercel.app/api/banners")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      bannerImages = data;
      console.log(bannerImages.length);
      changeBannerImage(bannerImageIndex);
      addEventsToBannerBtnsRight();
    })
    .catch((err) => console.error("Fetch error:", err));
};

const addEventsToBannerBtnsRight = () => {
  const btnList = document.getElementById("carusel-btn-list-right").children;
  const leftArrow = btnList[0];
  const rightArrow = btnList[1];
  let nextLeftImageIndex =
    bannerImageIndex === 0 ? bannerImages.length - 1 : bannerImageIndex - 1;
  let nextRightImageIndex =
    bannerImageIndex === bannerImages.length - 1 ? 0 : bannerImageIndex + 1;
  leftArrow.addEventListener("click", (e) => {
    e.preventDefault();
    bannerImageIndex = nextLeftImageIndex;
    changeBannerImage(bannerImageIndex);
  });
  rightArrow.addEventListener("click", (e) => {
    e.preventDefault();
    bannerImageIndex = nextRightImageIndex;
    changeBannerImage(bannerImageIndex);
  });
};

const addEventsToBannerBtnsLeft = () => {
  const div = document.getElementById("carusel-btn-list-left");
  let className = "carusel-btn";
  for (let i = 0; i < bannerImages.length; i++) {
    const btn = document.createElement("div");
    if (i == bannerImageIndex) {
      btn.className = className + " btn-long";
    } else {
      btn.className = className + " btn-short";
      btn.addEventListener("click", (e) => {
        e.preventDefault();
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
      (item) => `<li class="choose_list_item">
              <h3 class="choose_title">${item.model}</h3>
              <p class="choose_description">Economy Car</p>
              <img src="${item.image}" alt="${item.model}" />
              <div class="content">
                <p class="icons_text-1"><i class="fa-solid fa-gears"></i></i>5 Seats</p>
                <p class="icons_text-2"><i class="fa-solid fa-car"></i>Automatic</p>
                <p class="icons_text-3"><i class="fa-solid fa-file"></i>${item.year}</p>
                <p class="icons_text-4"><i class="fa-solid fa-sack-dollar"></i> ${item.priceEstimate}</p>
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

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  let mode = localStorage.getItem("mode");
  if (mode != null) {
    isDark = mode === "true";
  }
  changeMode();

  getBannerImages();
  fetchCatalog(`bmw`);

  // Choose section buttons
  buttons.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      fetchCatalog(e.target.value);
      for (let i of buttons) {
        i.classList.remove("active");
      }
      item.classList.add("active");
    });
  });

  dropdowns.forEach((dropdown) => {
    const dropBtn = dropdown.querySelector(".dropbtn");
    const items = dropdown.querySelectorAll(".dropdown-content div");

    dropBtn.onclick = (e) => {
      e.stopPropagation();
      dropdowns.forEach((d) => {
        if (d !== dropdown) d.classList.remove("active");
      });
      dropdown.classList.toggle("active");
    };

    items.forEach((item) => {
      item.onclick = () => {
        dropBtn.textContent = item.textContent + " ▼";
        dropdown.classList.remove("active");
        window.location.href = item.getAttribute("data-page");
      };
    });
  });
  document.addEventListener("click", (e) => {
    e.preventDefault();
    dropdowns.forEach((d) => d.classList.remove("active"));
  });

  // MODAL YARATISH
  const zoomBg = document.createElement("div");
  zoomBg.className = "card-modal-bg";
  const zoomCard = document.createElement("div");
  zoomCard.className = "card-modal-content";
  const zoomClose = document.createElement("span");
  zoomClose.className = "card-close-btn";
  zoomClose.innerHTML = "&times;";

  zoomCard.appendChild(zoomClose);
  zoomBg.appendChild(zoomCard);
  document.body.appendChild(zoomBg);

  zoomClose.onclick = (e) => {
    e.preventDefault();

    zoomCard.classList.remove("zoom");
    zoomBg.style.display = "none";
  };

  zoomBg.onclick = (e) => {
    e.preventDefault();

    if (e.target === zoomBg) {
      zoomCard.classList.remove("zoom");
      zoomBg.style.display = "none";
    }
  };

  document.querySelector(".login").addEventListener("click", () => {
    window.location.href = "./login/index.html";
  });
});

function activateListModal() {
  const cards = document.querySelectorAll(".choose_list_item");

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();

      zoomCard.innerHTML = card.innerHTML;
      zoomCard.appendChild(zoomClose);

      zoomBg.style.display = "flex";

      setTimeout(() => {
        zoomCard.classList.add("zoom");
      }, 20);
    });
  });
}
