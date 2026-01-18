let icon = document.querySelector(".changeTema");
let menuIcon = document.querySelector(".menu-hamburguer");
let abas = document.querySelector("#abas");
let tema = "dark";

const root = document.documentElement;
menuIcon.style.display = "none";

function mudarTema() {
  if (tema == "dark") {
    root.style.setProperty("--colorBackGroundPrimary", "#e9e9e9ff");
    root.style.setProperty("--colorTextSecundary", "#000814");
    icon.classList.replace("bi-sun-fill", "bi-moon-fill");
    tema = "light";
  } else {
    root.style.setProperty("--colorBackGroundPrimary", "#000814");
    root.style.setProperty("--colorTextSecundary", "#e2eafc");
    icon.classList.replace("bi-moon-fill", "bi-sun-fill");
    tema = "dark";
  }
}

function aparecerAbas() {
  if (abas2.style.display == "none") {
    abas2.style.display = "flex";
  } else {
    abas2.style.display = "none";
  }
}
