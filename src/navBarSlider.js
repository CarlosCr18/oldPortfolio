/*moveSlider function
It gets an index paramenter depending on the index the slider(background color) will resize and reposition under the index element of the navbar element

La funcion usa un parametro index y dependiendo del valor el slider(el color de fondo) cambiara su tamano y 
reposicionara debajo del elemento index de la barra de navegacion
*/
const moveSlider = (index) => {
  let slider = document.querySelector(".navBar-slider");
  let element = document.querySelectorAll(".navBar-link");
  slider.style.width = element[index].offsetWidth * 1.2 + "px";
  slider.style.left =
    element[index].offsetLeft - element[index].offsetWidth * 0.1 + "px";
  slider.style.height = element[index].offsetHeight * 2 + "px";

  if (
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--small-screen") == 0
  ) {
    slider.style.top =
      element[index].offsetTop -
      (slider.offsetHeight - element[index].offsetHeight) / 2 +
      "px";
  } else {
    slider.style.top =
      element[index].offsetTop -
      (slider.offsetHeight - element[index].offsetHeight) +
      "px";
  }
};
