const qizil = document.getElementById("qizil");
const sariq = document.getElementById("sariq");
const yashil = document.getElementById("yashil");
const redNumberEl = document.getElementById("red_number");
const yellowNumberEl = document.getElementById("yellow_number");
const greenNumberEl = document.getElementById("green_number");

function resetLights() {
  qizil.style.background = "#111";
  sariq.style.background = "#111";
  yashil.style.background = "#111";
  redNumberEl.innerText = "";
  yellowNumberEl.innerText = "";
  greenNumberEl.innerText = "";
}

function startCountdown(seconds, color, next) {
  resetLights();

  let count = seconds;
  let timer;

  if (color === "red") {
    qizil.style.background = "red";
    redNumberEl.innerText = count;
    timer = setInterval(() => {
      count--;
      redNumberEl.innerText = count;
      if (count <= 0) {
        clearInterval(timer);
        next();
      }
    }, 1000);
  }

  if (color === "yellow") {
    sariq.style.background = "yellow";
    yellowNumberEl.innerText = count;
    timer = setInterval(() => {
      count--;
      yellowNumberEl.innerText = count;
      if (count <= 0) {
        clearInterval(timer);
        next();
      }
    }, 1000);
  }

  if (color === "green") {
    yashil.style.background = "green";
    greenNumberEl.innerText = count;
    timer = setInterval(() => {
      count--;
      greenNumberEl.innerText = count;
      if (count <= 0) {
        clearInterval(timer);
        next();
      }
    }, 1000);
  }
}

function svetofor() {
  startCountdown(30, "red", () => {
    startCountdown(5, "yellow", () => {
      startCountdown(30, "green", () => {
        svetofor(); // qaytadan boshlanadi
      });
    });
  });
}

svetofor();
