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
