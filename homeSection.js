// Home section
// We only get the data and show it depending on the language
// Solo se obtiene la informacion y se muestra dependiendo del lenguaje

var ContentHome = function ContentHome(_ref) {
  var currentHomeData = _ref.currentHomeData;

  return React.createElement(
    "section",
    { className: "content-home", id: "content-home" },
    React.createElement(
      "h1",
      { className: "home-title" },
      currentHomeData.title
    ),
    React.createElement("div", { className: "home-text" }),
    React.createElement(
      "div",
      { className: "home-text-portfolio" },
      currentHomeData.text
    )
  );
};