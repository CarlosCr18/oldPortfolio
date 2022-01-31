//navBar section
//the data is set depending on the language, we use the useEffect hook so the navbarSlider element starts in the correct position with the right size
//la informacion es asignada dependiendo del idioma, usamos el hook useEffect para que el elemento navbarSlider inicie con el tamano y posicion correctas

//navBar section specific to the text anchor links
var NavBarLinks = function NavBarLinks(_ref) {
  var currentNavBarData = _ref.currentNavBarData;

  React.useEffect(function () {
    var slider = document.querySelector(".navBar-slider");
    var element = document.querySelector(".navBar-link");
    slider.style.width = element.offsetWidth * 1.2 + "px";
    slider.style.left = element.offsetLeft - element.offsetWidth * 0.1 + "px";
  }, []);

  return React.createElement(
    "div",
    null,
    React.createElement(
      "ul",
      { className: "navBar-list" },
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          {
            href: "#main",
            "aria-label": currentNavBarData.aria,
            className: "navBar-link"
          },
          currentNavBarData.home
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          {
            href: "#content-about",
            "aria-label": currentNavBarData.aria,
            className: "navBar-link"
          },
          currentNavBarData.about
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          {
            href: "#content-projects",
            "aria-label": currentNavBarData.aria,
            className: "navBar-link"
          },
          currentNavBarData.projects
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          {
            href: "#content-form",
            "aria-label": currentNavBarData.aria,
            className: "navBar-link"
          },
          currentNavBarData.contact
        )
      ),
      React.createElement("li", { className: "navBar-slider" })
    )
  );
};

//navBar section specific for the icons
var NavBarIcons = function NavBarIcons(_ref2) {
  var currentNavBarData = _ref2.currentNavBarData;

  return React.createElement(
    "nav",
    { className: "navBar-icons", "aria-label": "Primary navigation" },
    React.createElement(
      "div",
      { className: "navBar-list-icons" },
      React.createElement(
        "a",
        {
          href: "https://github.com/CarlosCr18",
          target: "_blank",
          tabIndex: "0",
          "aria-label": "link to github",
          className: "icon github",
          rel: "noreferrer"
        },
        React.createElement(
          "div",
          { className: "navBar-icon-title github-icon-title" },
          "Github"
        ),
        React.createElement("i", { className: "fa fa-github" })
      ),
      React.createElement(
        "a",
        {
          href: "https://www.linkedin.com/in/carlos-lopez-crespo-02a890196/",
          target: "_blank",
          tabIndex: "0",
          "aria-label": "link to linkedin",
          className: "icon linkedin",
          rel: "noreferrer"
        },
        React.createElement(
          "div",
          { className: "navBar-icon-title linkedin-icon-title" },
          "Linkedin"
        ),
        React.createElement("i", { className: "fa fa-linkedin", "aria-hidden": "true" })
      ),
      React.createElement(
        "a",
        {
          href: currentNavBarData.resumeUrl,
          tabIndex: "0",
          "aria-label": "link to download",
          className: "icon resume",
          download: "Carlos Crespo developer resume"
        },
        React.createElement(
          "div",
          { className: "navBar-icon-title resume-icon-title" },
          "Resume"
        ),
        React.createElement("i", { className: "fa fa-download", "aria-hidden": "true" })
      )
    )
  );
};

//Returns the full navbar with both text and icons sections selected
//Regresa la barra de navegacion completa con ambas partes de texto e iconos

var NavBar = function NavBar(_ref3) {
  var data = _ref3.data;

  return React.createElement(
    "header",
    { className: "navBar", "data-visible": "false" },
    React.createElement(NavBarLinks, { currentNavBarData: data }),
    React.createElement(NavBarIcons, { currentNavBarData: data })
  );
};