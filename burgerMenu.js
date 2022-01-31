//BurgerMenu
//We add a listener on the button to show and hide the navbar when on small scren/mobile devices
//Anadimos un listener al boton para mostrar y ocultar la barra de navegacion en pequenas pantallas o dispositivos mobiles

var primaryNav = document.querySelector(".navBar");
var navToggle = document.querySelector(".burgerMenu");

navToggle.addEventListener("click", function () {
  var visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.innerHTML = "&#9776;";
  } else {
    primaryNav.setAttribute("data-visible", true);
    navToggle.innerHTML = "🗙";
  }
});