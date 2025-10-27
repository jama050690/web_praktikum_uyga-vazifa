const qizil = document.getElementById("qizil");
const sariq = document.getElementById("sariq");
const yashil = document.getElementById("yashil");

function resetLights() {
  qizil.style.background = "#111";
  sariq.style.background = "#111";
  yashil.style.background = "#111";
}

function svetofor() {
  resetLights();
  qizil.style.background = "red";
  setTimeout(() => {
    qizil.style.background = "#111";
    sariq.style.background = "yellow";
  }, 25000);
  setTimeout(() => {
    sariq.style.background = "#111";
    yashil.style.background = "green";
  }, 30000);
  setTimeout(() => {
    yashil.style.background = "#111";
  }, 50000);
}

svetofor();
setInterval(svetofor, 50000);
