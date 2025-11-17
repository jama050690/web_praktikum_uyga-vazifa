const darkEl = document.querySelector(".dark");
const sun = document.querySelector(".dark_note_2");
const moon = document.querySelector(".dark_note_1");

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
// login section
document.querySelector(".login").addEventListener("click", () => {
  window.location.href = "./login/index.html";
});

// ============== CART LOCALSTORAGE ==============
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalEl = document.querySelector(".total");

const badgeEl = document.querySelector(".doira");
const headerTotalEl = document.querySelector(".total-header");

// headerdagi savatcha soni + summa
function updateHeaderCart() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  badgeEl.textContent = totalQty;
  headerTotalEl.textContent = "$ " + totalPrice.toFixed(2);
}
updateHeaderCart();

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ============== RENDER CART PAGE ==============
function renderCart() {
  if (!cart.length) {
    cartItemsEl.innerHTML = `<p style="padding:20px 0;">Cart is empty.</p>`;
    subtotalEl.textContent = "$0.00";
    totalEl.textContent = "$20.00";
    return;
  }

  cartItemsEl.innerHTML = "";

  cart.forEach((item, index) => {
    const lineTotal = (item.price * item.qty).toFixed(2);

    cartItemsEl.innerHTML += `
      <div class="cart-item">
        <div class="cart-info">
          <span class="remove-btn" data-index="${index}">&times;</span>
          <img src="${item.image}" alt="${item.title}" />
          <p>${item.title}</p>
        </div>

        <p>$${item.price.toFixed(2)}</p>

        <div class="cart-qty">
          <button class="qty-btn" data-index="${index}" data-change="-1">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" data-index="${index}" data-change="1">+</button>
        </div>

        <p>$${lineTotal}</p>
      </div>
    `;
  });

  updateSummary();
}

// ============== SUMMARY ==============
function updateSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  subtotalEl.textContent = "$" + subtotal.toFixed(2);
  totalEl.textContent = "$" + (subtotal + 20).toFixed(2);
}

// ============== EVENT DELEGATION (remove / qty) ==============
cartItemsEl.addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".remove-btn");
  if (removeBtn) {
    const index = Number(removeBtn.dataset.index);
    cart.splice(index, 1);
    saveCart();
    updateHeaderCart();
    renderCart();
    return;
  }

  const qtyBtn = e.target.closest(".qty-btn");
  if (qtyBtn) {
    const index = Number(qtyBtn.dataset.index);
    const change = Number(qtyBtn.dataset.change);

    cart[index].qty += change;
    if (cart[index].qty < 1) cart[index].qty = 1;

    saveCart();
    updateHeaderCart();
    renderCart();
  }
});

renderCart();
