export function validateKitob(data) {
  const { nomi, muallif, nashryili, sahifalar, holat } = data;

  if (!nomi || !muallif) {
    return "Nomi va muallif bo'sh bo'lmasligi kerak";
  }

  if (typeof nashryili !== "number" || nashryili < 1880 || nashryili > 2024) {
    return "Nashr yili 1880–2024 oralig'ida bo'lishi kerak";
  }

  if (typeof sahifalar !== "number" || sahifalar < 1) {
    return "Sahifalar 1 dan kam bo'lmasligi kerak";
  }

  if (holat && !["mavjud", "olingan"].includes(holat)) {
    return "Holat faqat 'mavjud' yoki 'olingan' bo'lishi mumkin";
  }

  return null;
}
