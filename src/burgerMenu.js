//BurgerMenu
//We add a listener on the button to show and hide the navbar when on small scren/mobile devices
//Anadimos un listener al boton para mostrar y ocultar la barra de navegacion en pequenas pantallas o dispositivos mobiles

const primaryNav = document.querySelector(".navBar");
const navToggle = document.querySelector(".burgerMenu");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.innerHTML = "&#9776;";
  } else {
    primaryNav.setAttribute("data-visible", true);
    navToggle.innerHTML = "🗙";
  }
});
