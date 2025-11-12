// Topshiriq -  3: Bank Hisobi ( oson )
// Bank hisobi klassi - balansni to'g'ridan-to'g'ri o'zgartirib bo'lmaydigan.
// Kodni yozing va ishlatib ko'ring
// To'g'ridan-to'g'ri #balance ga murojaat qiling - xatolik chiqishini tekshiring
// 2 ta hisob yarating va turli operatsiyalar bajaring

class Hisob {
  #balance;
  #name;
  #accountNumber;
  #isActive;
  constructor(balance, name, accountNumber) {
    this.#balance = balance;
    this.#name = name;
    this.#accountNumber = accountNumber;
    this.#isActive = true;
  }
  /**
   * Balansni hozirgi holatini qaytaradi
   */

  checkBalance() {
    console.log(`Balansingizda ${this.#balance} UZS bor`);
  }

  /**
   * balansdan pul yechib oladigan funksiya
   * @param {*} amount bu yechib olinadigan qiymat
   */
  withdraw(amount) {
    if (this.#isActive == false) {
      console.log("Hisobingiz faol emas. Hisobingizni to'ldiring");
      return;
    }
    if (this.#balance >= amount) {
      this.#balance -= amount;
      console.log(`${amount}`, " UZS muvaffaqiyatli yechildi");
      if (this.#balance == 0) {
        this.#isActive = false;
      }
    } else {
      console.log("Balansda mablag' yetarli emas");
    }
  }
  /**
   *  balansga pul qo'shadigan funksiya
   * @param {*} amount bu hisobga kiritiladigan qiymat
   */
  deposit(amount) {
    this.#balance += amount;
    this.#isActive = true;
    console.log(`${amount} UZS pulingiz muvaffaqiyatli qo'shildi`);
  }
}
const hisob1 = new Hisob(1000000, "Jamshiddin", "007-10-31-22");
hisob1.balance -= 200000; // Balansni to'g'ridan to'g'ri o'zgartirib bo'lmaydi,faqat withdraw() va deposit() metodlari orqali o'zgartirish mumkin.
hisob1.checkBalance();
hisob1.withdraw(50000);
hisob1.checkBalance();
hisob1.deposit(10000);
hisob1.checkBalance();
const hisob2 = new Hisob(10000, "Jumanazar", "008-11-31-22");
hisob2.withdraw(20000);
hisob2.checkBalance();
hisob2.withdraw(10000);
hisob2.withdraw(5000);
