const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");
const relojContenedor = document.getElementById("relog-contenedor");

let is24Hour = false;

function actualizarHora() {
  const ahora = new Date();
  let horas = ahora.getHours();
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();

  if (!is24Hour) {
    horas = horas % 12 || 12;
  }

  horasEl.textContent = String(horas).padStart(2, "0");
  minutosEl.textContent = String(minutos).padStart(2, "0");
  segundosEl.textContent = String(segundos).padStart(2, "0");
}

setInterval(actualizarHora, 1000);
relojContenedor.addEventListener("click", () => {
  is24Hour = !is24Hour;
  actualizarHora();
});

actualizarHora();
