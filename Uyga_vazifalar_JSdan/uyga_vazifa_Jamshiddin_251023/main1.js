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

class Sale {
  constructor(customer, product, quantity, total_price, date) {
    (this.customer = customer),
      (this.product = product),
      (this.quantity = quantity),
      (this.total_price = total_price),
      (this.date = date);
  }
  calculate_total() {
    if (purchase_history.length === 0) {
      return 0;
    }
    let total = 0;
    this.purchase_history.forEach((element) => {
      total += ClipboardItem.price * ClipboardItem.quantity;
    });
    return total;
  }
  process_sale(product, quantity) {
    if (product.quantity < quantity) {
      return "Omborda yetarli mahsulot yo‘q.";
    }

    const total_price = product.price * quantity;

    if (this.balance < total_price) {
      return "Balansda yetarli mablag‘ yo‘q.";
    }
    product.quantity -= quantity;
    this.balance -= total_price;

    this.purchase_history.push({
      product_name: product.name,
      quantity: quantity,
      price: product.price,
    });

    return `Sotuv muvaffaqiyatli amalga oshirildi: ${product.name} (${quantity} dona).`;
  }
  print_receipt() {
    if (this.purchase_history.length === 0) {
      return "Xaridlar mavjud emas.";
    }

    let receipt = `\n----- CHEK -----\n`;
    this.purchase_history.forEach((item, index) => {
      const total = item.price * item.quantity;
      receipt += `${index + 1}. ${item.product_name} | ${
        item.quantity
      } dona | ${item.price} so'm | jami: ${total} so'm\n`;
    });

    receipt += `-----------------\nUmumiy to'lov: ${this.calculate_total()} so‘m\n`;
    receipt += `Qolgan balans: ${this.balance} so'm\n-----------------`;
    return receipt;
  }
}
// const newProduct = new Product(1234, "iPhone", 2500000, 100 + "ta");
// console.log(newProduct);

// const customer1 = new Customer("Javlon", "+998901234567", 100000);

// console.log(customer1.show_balance());
// console.log(customer1.add_money(50000));
// console.log(customer1.show_balance());
// console.log(customer1.show_history());
