// Number ma'lumot tipiga missollar
// 1-masala;
// // let son1 = 25;
// // let son2 = 15;
// // console.log(son1 + son2);

// 2-masala;
// let son1 = 25;
// let son2 = 15;
// console.log(son1 - son2);

// 3-masala;
// let son1 = 98;
// let son2 = 12;
// console.log(son1 * son2);

// 4-masala;
// let son1 = 98;
// let son2 = 12;
// console.log(son1 / son2);

// 5 - masala;
// let son1 = 98;
// let son2 = 12;
// let son3 = 15;
// console.log(son1 * son2 * son3);

// 6-masala;
// let son1 = 98;
// let son2 = 12;
// let son3 = 15;
// console.log(son1 + son2 + son3);

// 7-masala;
// let son1 = 98;
// let son2 = 12;
// let son3 = 15;
// console.log(son1 - son2 - son3);

// 8-masala;
// let son1 = 98;
// let son2 = 12;
// let son3 = 8;
// console.log(son1 / son2 / son3);

// Srting ma'lumotlar tipiga misollar

// 1-masala;
// let ism = "Jamshddin";
// let yosh = 35;
// console.log(ism + yosh);

// 2 - masala;
// let shaharBir = "Toshkent";
// let shaharIkki = "Samarqand";
// let matn = `Men ${shaharBir} va ${shaharIkki} shaharlarida bo'lganman.`;
// console.log(matn);

// // 3 - masala;
// let rang = "Oq";
// let hayvon = "Ot";
// let matn = `Mening sevimli rangim ${rang} va sevimli rayvonim ${hayvon}`;
// console.log(matn);

//  4-masala;
// let kun = "5";
// let oy = "iyun";
// let yil = "1990";
// let matn = `Men  ${yil} yining ${oy} oyining ${kun} kunida tug'ilganman`;
// console.log(matn);

// //  5-masala;
// let mahsulot = "un";
// let mahsulot1 = "tuxum";
// let mahsulot2 = "sut";
// let mahsulot3 = "shakar";
// let matn = `Menga to'rt tayorlashim uchun ${mahsulot},${mahsulot1},${mahsulot2} va ${mahsulot3} kerak `;
// console.log(matn);

// 6-masala;
// let filmNomi = "Titanik";
// let rejissor = "Jems Kameron";
// let yil = 1997;
// let matn = `${rejissor} ${yil}-yil ${filmNomi} nomli filmni yaratdi`;
// console.log(matn);

// Boolean oid topshiriqlar;
// 1 - topshiriq;
// let mening_yoshim = 16;
// console.log(mening_yoshim > 18);
// console.log(mening_yoshim < 18);

// 2-topshiriq;
// let mening_yoshim = 22;
// console.log( mening_yoshim >20)

// 3-topshiriq;
// let mening_yoshim = 16;
// console.log( mening_yoshim <18)

// 4-topshiriq;  Mahsulot narxi 100000 dan qimmatligini  tekshiring
// let narx1 = 85000;
// let narx2 = 100000;
// console.log(narx1 > narx2);
// console.log("arzon");
// console.log(narx1 < narx2);
// console.log("qimmat");

// 5-topshiriq;
// let narx1 = 120000;
// let narx2 = 125000;
// console.log(narx1 > narx2);
// console.log("arzon");
// console.log(narx1 < narx2);
// console.log("qimmat");

//   BigInt ga oid topshiriqlar

// 1-topshiriq;

// let kattaSon = 9007199254740991n;
// console.log(kattaSon + 1000n);

// 2-topshiriq;

// let birinchiKattaSon = 123456789012345n;
// let ikkinchiKattaSon = 987654321098765n;
// console.log(birinchiKattaSon * ikkinchiKattaSon);

// 3-topshiriq;

// let judaKattaSon = 999999999999999999n;
// let ayriluvchi = 123456789n;
// console.log(judaKattaSon - ayriluvchi);

// 4-topshiriq;

// let juftKattaSon = 888888888888888888n;
// console.log(juftKattaSon / 2n);

// 5-topshiriq;

// let asos = 999999999n;
// console.log(asos ** 2n);
// console.log(asos * asos);

// 6-topshiriq;
// let kattaSon1 = 111111111111111111n;
// let kattaSon2 = 222222222222222222n;
// console.log(kattaSon1 < kattaSon2);
// console.log("kattaSon2 katta");

// 7-topshiriq. Regular number dan BigInt yarating
let oddiyRaqam = 987654321;
console.log(oddiyRaqam + (2 ** 53 - 1));
console.log(BigInt);
console.log(oddiyRaqam + (2 ** 53 - 1) + 500);

// 8-topshiriq;
// let son1 = 100n;
// let son2 = 200n;
// let son3 = 300n;
// console.log(son1 + son2 + son3);
