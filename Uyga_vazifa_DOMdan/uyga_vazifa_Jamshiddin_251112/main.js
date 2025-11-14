const darkEl = document.querySelector(".dark");
const sun = document.querySelector(".dark_note_2");
const moon = document.querySelector(".dark_note_1");
const main_enter_content = document.querySelector(".main_enter_content");
const choose_list = document.querySelector(".choose_list");
const form_input = document.querySelector(".form_input");
const buttons = document.querySelectorAll(".choose_button");

const baseUrl = "https://cars-project-six.vercel.app/";
var bannerImages = [];

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
const changeBannerImage = (index) => {
  const item = bannerImages[index];
  main_enter_content.innerHTML = `
    <div class="main_enter_box">
      <div class="main_enter_text">
        <h1 class="main_enter_title">${item.model}</h1>
      </div>
      <img class="main_emage" src="${item.image}" alt="Photo" />
      <div id="banner_img_btn_list">
        <div class="btn-banner"> < </div>
        <div class="btn-banner"> > </div>
      </div>
    </div>
    `;
};

// fetch banner images from API
const getBannerImages = () => {
  fetch("https://cars-project-six.vercel.app/api/banners")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      bannerImages = data;
      changeBannerImage(0);
    })
    .catch((err) => console.error("Fetch error:", err));
};

getBannerImages();

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

fetchCatalog(`bmw`);

// Choose section buttons
buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    fetchCatalog(e.target.value);
    for (let i of buttons) {
      i.classList.remove("active");
    }
    item.classList.add("active");
  });
});
const dropdowns = document.querySelectorAll(".dropdown");

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

document.addEventListener("click", () => {
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

zoomClose.onclick = () => {
  zoomCard.classList.remove("zoom");
  zoomBg.style.display = "none";
};

zoomBg.onclick = (e) => {
  if (e.target === zoomBg) {
    zoomCard.classList.remove("zoom");
    zoomBg.style.display = "none";
  }
};

function activateListModal() {
  const cards = document.querySelectorAll(".choose_list_item");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      zoomCard.innerHTML = card.innerHTML;
      zoomCard.appendChild(zoomClose);

      zoomBg.style.display = "flex";

      setTimeout(() => {
        zoomCard.classList.add("zoom");
      }, 20);
    });
  });
}
document.querySelector(".login").addEventListener("click", () => {
  window.location.href = "./login/index.html";
});
