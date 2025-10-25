class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  update_price(new_price) {
    this.price = new_price;
    return `Yangi narx: ${this.price}`;
  }
  add_stock(amount) {
    this.quantity += amount;
    return `Yangi zaxira: ${this.quantity}`;
  }
  reduce_stock(amount) {
    if (amount > this.quantity) return "Yetarli zaxira yo‘q";
    this.quantity -= amount;
    return `Qolgan zaxira: ${this.quantity}`;
  }
  show_info() {
    return `Mahsulot: ${this.name}\nNarx: ${this.price} so'm\nOmborda: ${this.quantity} dona`;
  }
}

class Customer {
  constructor(name, phone, balance = 0) {
    this.name = name;
    this.phone = phone;
    this.balance = balance;
    this.purchase_history = [];
  }
  add_money(amount) {
    this.balance += amount;
    return `Balans yangilandi: ${this.balance} so'm`;
  }
  show_balance() {
    return `Mijoz balansida: ${this.balance} so'm mavjud`;
  }
  process_sale(product, quantity) {
    if (product.quantity < quantity) return "Omborda yetarli mahsulot yo‘q.";
    let total_price = product.price * quantity;
    if (quantity >= 10) {
      const discount = total_price * 0.1;
      total_price -= discount;
    }
    if (this.balance < total_price) return "Balansda yetarli mablag‘ yo‘q.";
    product.quantity -= quantity;
    this.balance -= total_price;
    this.purchase_history.push({
      product_name: product.name,
      quantity: quantity,
      price: product.price,
      total: total_price,
    });
    return `${product.name} sotib olindi (${quantity} dona). To‘lov: ${total_price} so‘m.`;
  }
  calculate_total() {
    let total = 0;
    this.purchase_history.forEach((item) => (total += item.total));
    return total;
  }
  print_receipt(shop) {
    if (this.purchase_history.length === 0) return "Xaridlar mavjud emas.";
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")} ${now
      .getHours()
      .toString()
      .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    let receipt = "========== CHEK ==========\n";
    receipt += `Do'kon: ${shop.name}\n`;
    receipt += `Xaridor: ${this.name}\n`;
    receipt += `Telefon: ${this.phone}\n`;
    receipt += `Sana: ${formattedDate}\n`;
    receipt += "--------------------------\n";
    this.purchase_history.forEach((item) => {
      receipt += `Mahsulot: ${item.product_name}\n`;
      receipt += `Narxi: ${item.price} so'm\n`;
      receipt += `Miqdori: ${item.quantity} dona\n`;
      receipt += `Jami: ${item.total} so'm\n`;
      receipt += "--------------------------\n";
    });
    receipt += `JAMI: ${this.calculate_total()} so'm\n`;
    receipt += `Qolgan balans: ${this.balance} so'm\n`;
    receipt += "==========================";
    return receipt;
  }
}

class Shop {
  constructor(name) {
    this.name = name;
    this.products = [];
    this.customers = [];
    this.sales = [];
    this.total_income = 0;
  }
  add_product(product) {
    this.products.push(product);
    return `${product.name} do‘konga qo‘shildi.`;
  }
  register_customer(customer) {
    this.customers.push(customer);
    return `${customer.name} ro‘yxatga olindi.`;
  }
  find_product(name) {
    const found = this.products.find(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
    if (!found) return `${name} nomli mahsulot topilmadi.`;
    return `${found.name} — ${found.price} so'm (${found.quantity} dona omborda)`;
  }
  check_low_stock() {
    const lowStock = this.products.filter((p) => p.quantity < 10);
    if (lowStock.length === 0) return "Hamma mahsulotlar yetarli.";
    let warning = "Quyidagi mahsulotlar 10 tadan kam:\n";
    lowStock.forEach(
      (p) => (warning += `${p.name}: ${p.quantity} dona qoldi.\n`)
    );
    return warning;
  }
  show_all_products() {
    if (this.products.length === 0) return "Hozircha mahsulot yo'q.";
    let result = "Do'kondagi mahsulotlar:\n";
    this.products.forEach(
      (p, i) =>
        (result += `${i + 1}. ${p.name} — ${p.price} so'm (${
          p.quantity
        } dona)\n`)
    );
    return result;
  }
}

const shop = new Shop("TechnoStore");
const iphone = new Product(1, "iPhone 15", 15000000, 12);
const airpods = new Product(2, "AirPods Pro", 4000000, 8);
const customer = new Customer("Ali", "+998901234567", 200000000);
console.log(shop.add_product(iphone));
console.log(shop.add_product(airpods));
console.log(shop.register_customer(customer));
console.log(shop.find_product("iPhone 15"));
console.log(customer.process_sale(iphone, 10));
console.log(customer.process_sale(airpods, 2));
console.log(shop.check_low_stock());
console.log(customer.print_receipt(shop));
