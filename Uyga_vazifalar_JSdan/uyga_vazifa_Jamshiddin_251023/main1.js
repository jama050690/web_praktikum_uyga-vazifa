// TOpshiriq-4;(Virtual Do'kon)
//Do'kon uchun mahsulot va sotuvlarni boshqaradigan dastur yarating.
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
    if (amount > this.quantity) {
      return "Yetarli zaxira yo‘q";
    }
    this.quantity -= amount;
    return `Qolgan zaxira: ${this.quantity}`;
  }

  show_info() {
    return `Mahsulot: ${this.name}\nID: ${this.id}\nNarx: ${this.price}\nMiqdor: ${this.quantity}`;
  }
}
class Customer {
  constructor(name, phone, balance = 0, purchase_history = []) {
    this.name = name;
    this.phone = phone;
    this.balanse = balance;
    this.purchase_history = purchase_history;
  }
  add_money(amount) {
    this.balanse += amount;
    return ` Balans yangilandi: ${this.balanse} so'm`;
  }
  show_balance() {
    return ` Mijsozda: ${this.balanse} so'm mavjud`;
  }
  show_history() {
    return this.purchase_history.length === 0
      ? "Xarid mavjud emas"
      : this.purchase_history.join(", ");
  }
}

// const newProduct = new Product(1234, "iPhone", 2500000, 100 + "ta");
// console.log(newProduct);

// const customer1 = new Customer("Javlon", "+998901234567", 100000);

// console.log(customer1.show_balance());
// console.log(customer1.add_money(50000));
// console.log(customer1.show_balance());
// console.log(customer1.show_history());
