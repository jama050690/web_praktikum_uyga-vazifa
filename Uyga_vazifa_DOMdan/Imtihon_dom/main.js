const darkEl = document.querySelector(".dark");
const sun = document.querySelector(".dark_note_2");
const moon = document.querySelector(".dark_note_1");
const seller_list_item = document.querySelectorAll(".seller_list_item");
const seller_list_two = document.querySelector(".seller_list_two");
const url = "https://fake-store-six-peach.vercel.app";
const cartIcon = document.querySelector(".cart-icon");
const badgeEl = document.querySelector(".doira");
const headerTotalEl = document.querySelector(".total-header");

// dark mode
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

// login
document.querySelector(".login").addEventListener("click", () => {
  window.location.href = "./login/index.html";
});

// catalog
function renderProducts(data) {
  seller_list_two.innerHTML = data
    .map(
      (item) => `
      <li class="seller_list_two_items">
        <img src="${item.image}" alt="${item.title}" />
        <div class="seller_card_body">
          <p class="seller_list_two_items_text">
            ${item.title}
          </p>
          <img src="./images/Stars.svg" alt="Stars" />
          <div class="seller_text">
            <p class="narx">$${(item.price * 1.8).toFixed(2)}</p>
            <p class="skidka"><b>24% Off</b></p>
            <button class="add-cart" data-id="${item.id}">🛒</button>
          </div>
          <p class="price">
            <b>$${item.price.toFixed(2)}</b>
          </p>
        </div>
      </li>
    `
    )
    .join("");

  attachAddToCartHandlers(data);
}
const fetchCatalog = (category) => {
  fetch(`${url}/${category}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      renderProducts(data);
      console.log("Category:", category);
      console.log("Fetch URL:", `${url}/${category}`);
    })
    .catch((err) => console.error("Fetch error:", err));
};

seller_list_item.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();

    seller_list_item.forEach((el) => el.classList.remove("active"));
    li.classList.add("active");

    const category = li.getAttribute("value");
    fetchCatalog(category);
  });
});

// localga ma'lumot uzatish

let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateHeaderCart() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  badgeEl.textContent = totalQty;
  headerTotalEl.textContent = "$ " + totalPrice.toFixed(2);
}

updateHeaderCart();

cartIcon.addEventListener("click", () => {
  window.location.href = "modal";
});

// function attachAddToCartHandlers(products) {
//   document.querySelectorAll(".add-to-cart").forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       e.stopPropagation();
//       const id = Number(btn.dataset.id);
//       const product = products.find((p) => p.id === id);
//       if (!product) return;

//       const existing = cart.find((item) => item.id === id);
//       if (existing) {
//         existing.qty += 1;
//       } else {
//         cart.push({
//           id: product.id,
//           title: product.title,
//           price: product.price,
//           image: product.image,
//           qty: 1,
//         });
//       }

//       saveCart();
//       updateHeaderCart();
//     });
//   });
// }

// // initial load
// fetchCatalog("all");
