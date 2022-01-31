var ContentAbout = function ContentAbout(_ref) {
  var currentAboutData = _ref.currentAboutData;

  //About me section
  //first set the data from source depending on the language
  //we split the text into pieces and adding carriage returns to style the text
  // Seccion acerca de
  // Primero sleccionamos la informacion dependiendo de lenguaje
  // Separamos el texto en piezas para poder darle estilo al texto

  // let currentAboutData = language === "es" ? aboutData[0] : aboutData[1];
  return React.createElement(
    "section",
    { className: "content-about", id: "content-about", tabIndex: "0" },
    React.createElement(
      "div",
      { className: "content-about-text" },
      React.createElement(
        "h2",
        { className: "About-Title" },
        currentAboutData.title
      ),
      React.createElement(
        "div",
        { className: "About-text" },
        currentAboutData.text.split("\n")[0],
        React.createElement("br", null),
        React.createElement("br", null),
        currentAboutData.text.split("\n")[1],
        React.createElement("br", null),
        React.createElement("br", null),
        currentAboutData.text.split("\n")[2]
      )
    ),
    React.createElement(
      "div",
      { className: "About-skills" },
      React.createElement(
        "h3",
        null,
        "Skills"
      ),
      React.createElement(
        "div",
        { className: "About-skills-list" },
        React.createElement("img", {
          loading: "lazy",
          src: "img/html.webp",
          alt: "html icon",
          decoding: "async"
        }),
        React.createElement("img", {
          loading: "lazy",
          src: "img/javascript.svg",
          alt: "javascript icon",
          decoding: "async"
        }),
        React.createElement("img", {
          loading: "lazy",
          src: "img/CSS3.svg",
          alt: "css icon",
          decoding: "async"
        }),
        React.createElement(
          "div",
          null,
          React.createElement("img", {
            loading: "lazy",
            src: "img/react.webp",
            alt: "React icon",
            decoding: "async"
          }),
          React.createElement(
            "p",
            null,
            "React"
          )
        ),
        React.createElement(
          "div",
          null,
          React.createElement("img", {
            loading: "lazy",
            src: "img/github.svg",
            alt: "Github icon",
            decoding: "async"
          }),
          React.createElement(
            "p",
            null,
            "Github"
          )
        )
      )
    )
  );
};