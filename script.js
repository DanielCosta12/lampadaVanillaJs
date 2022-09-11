let lampadaOn = document.getElementById("lampadaOn");
let lampadaOff = document.getElementById("lampadaOff");
let resetar = document.getElementById("resetar");
let img = document.getElementById("img");
let imgLigada = "./assets/ligada.jpg";
let imgQuebrada = "./assets/quebrada.jpg";
let imgDesligada = "./assets/desligada.jpg";
let lampadaQuebrada = false;

function clickOn() {
  if (lampadaQuebrada === true) {
    return;
  } else {
    img.src = imgLigada;
  }
}
function clickOff() {
  if (lampadaQuebrada === true) {
    return;
  } else {
    img.src = imgDesligada;
  }
}
function quebrada() {
  img.src = imgQuebrada;
  return (lampadaQuebrada = true);
}
function resetarLampada() {
  img.src = imgDesligada;
  return (lampadaQuebrada = false);
}

img.addEventListener("click", () => quebrada());
lampadaOn.addEventListener("click", () => clickOn());
lampadaOff.addEventListener("click", () => clickOff());
resetar.addEventListener("click", () => resetarLampada());
