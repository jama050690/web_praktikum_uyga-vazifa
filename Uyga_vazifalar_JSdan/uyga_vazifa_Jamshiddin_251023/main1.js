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
