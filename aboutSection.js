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
        React.createElement(
          "div",
          { className: "about-text-top" },
          currentAboutData.text.split("\n")[0]
        ),
        React.createElement(
          "div",
          { className: "about-text-middle" },
          currentAboutData.text.split("\n")[1]
        ),
        React.createElement(
          "div",
          { className: "about-text-bottom" },
          currentAboutData.text.split("\n")[2]
        )
      )
    ),
    React.createElement(
      "div",
      { className: "About-skills" },
      React.createElement("h3", null, "Skills"),
      React.createElement(
        "div",
        { className: "About-skills-list" },
        React.createElement("img", {
          loading: "lazy",
          src: "img/mongo.svg",
          alt: "mongo icon",
          decoding: "async",
        }),
        React.createElement(
          "div",
          null,
          React.createElement("img", {
            loading: "lazy",
            src: "img/express.png",
            alt: "expres icon",
            decoding: "async",
          }),
          React.createElement("p", null, "Espress")
        ),
        React.createElement(
          "div",
          null,
          React.createElement("img", {
            loading: "lazy",
            src: "img/react.webp",
            alt: "React icon",
            decoding: "async",
          }),
          React.createElement("p", null, "React")
        ),
        React.createElement("img", {
          loading: "lazy",
          src: "img/nodejs.svg",
          alt: "nodejs icon",
          decoding: "async",
        }),
        React.createElement("img", {
          loading: "lazy",
          src: "img/next.svg",
          alt: "next icon",
          decoding: "async",
        }),
        React.createElement(
          "div",
          null,
          React.createElement("img", {
            loading: "lazy",
            src: "img/github.svg",
            alt: "Github icon",
            decoding: "async",
          }),
          React.createElement("p", null, "Github")
        )
      )
    )
  );
};
