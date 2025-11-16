// =========================
//  SELECTORS
// =========================
const darkEl = document.querySelector(".dark");
const sun = document.querySelector(".dark_note_2");
const moon = document.querySelector(".dark_note_1");

const seller_list_two = document.querySelector(".seller_list_two");
const seller_list_item = document.querySelectorAll(".seller_list_item");

const cartIcon = document.querySelector(".cart-icon");
const badgeEl = document.querySelector(".doira");
const headerTotalEl = document.querySelector(".total-header");

// Fake Store API
const API_URL = "https://fakestoreapi.com/products";

// =========================
//  DARK MODE
// =========================
let isDark = localStorage.getItem("mode") === "dark";

function applyMode() {
  if (isDark) {
    document.body.classList.add("dark_mode");
    sun.style.display = "block";
    moon.style.display = "none";
  } else {
    document.body.classList.remove("dark_mode");
    sun.style.display = "none";
    moon.style.display = "block";
  }
}

applyMode();

darkEl.addEventListener("click", () => {
  isDark = !isDark;
  localStorage.setItem("mode", isDark ? "dark" : "light");
  applyMode();
});

// =========================
//  CART (LOCALSTORAGE)
// =========================
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

// header cart -> cart page
cartIcon.addEventListener("click", () => {
  window.location.href = "cart.html";
});

// =========================
//  PRODUCTS (BEST SELLER)
// =========================
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
            <button class="add-to-cart" data-id="${item.id}">🛒</button>
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

function fetchCatalog(category) {
  let url = API_URL;

  if (category && category !== "all") {
    url = `${API_URL}/category/${encodeURIComponent(category)}`;
  }

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (!Array.isArray(data)) data = [data];
      renderProducts(data);
    })
    .catch((err) => console.error("Fetch error:", err));
}

// category buttons
seller_list_item.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();

    seller_list_item.forEach((el) => el.classList.remove("active"));
    li.classList.add("active");

    const category = li.getAttribute("value");
    fetchCatalog(category);
  });
});

// =========================
//  ADD TO CART
// =========================
function attachAddToCartHandlers(products) {
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = Number(btn.dataset.id);
      const product = products.find((p) => p.id === id);
      if (!product) return;

      const existing = cart.find((item) => item.id === id);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          qty: 1,
        });
      }

      saveCart();
      updateHeaderCart();
    });
  });
}

// initial load
fetchCatalog("all");
