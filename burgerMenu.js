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
