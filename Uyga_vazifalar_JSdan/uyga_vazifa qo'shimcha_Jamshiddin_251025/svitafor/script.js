const qizil = document.getElementById("qizil");
const sariq = document.getElementById("sariq");
const yashil = document.getElementById("yashil");

function svetofor() {
  qizil.style.background = "red";
  setTimeout(() => {
    qizil.style.background = "#111";
    sariq.style.background = "yellow";
  }, 2000);
  setTimeout(() => {
    sariq.style.background = "#111";
    yashil.style.background = "green";
  }, 4000);
  setTimeout(() => {
    yashil.style.background = "#111";
  }, 6000);
}

svetofor();
setInterval(svetofor, 6000);
