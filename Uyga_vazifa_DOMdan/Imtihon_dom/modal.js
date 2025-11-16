let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalEl = document.querySelector(".total");
const badge = document.querySelector(".doira");

// HEADER BADGE
function updateBadge() {
  badge.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
}
updateBadge();

function renderCart() {
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    let row = `
        <div class="cart-item">

            <div class="cart-info">
                <span class="remove-btn" onclick="removeItem(${index})">&times;</span>
                <img src="${item.image}">
                <p>${item.title}</p>
            </div>

            <p>$${item.price}</p>

            <div class="cart-qty">
                <button onclick="changeQty(${index}, -1)">-</button>
                <span>${item.qty}</span>
                <button onclick="changeQty(${index}, 1)">+</button>
            </div>

            <p>$${(item.price * item.qty).toFixed(2)}</p>
        </div>
        `;

    cartItems.innerHTML += row;
  });

  updateSummary();
}

function changeQty(i, num) {
  cart[i].qty += num;
  if (cart[i].qty < 1) cart[i].qty = 1;
  save();
}

function removeItem(i) {
  cart.splice(i, 1);
  save();
}

function save() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateBadge();
  renderCart();
}

function updateSummary() {
  let subtotal = cart.reduce((sum, i) => sum + i.qty * i.price, 0);
  subtotalEl.textContent = "$" + subtotal.toFixed(2);
  totalEl.textContent = "$" + (subtotal + 20).toFixed(2);
}

renderCart();
