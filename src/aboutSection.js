const ContentAbout = ({ currentAboutData }) => {
  //About me section
  //first set the data from source depending on the language
  //we split the text into pieces and adding carriage returns to style the text
  // Seccion acerca de
  // Primero sleccionamos la informacion dependiendo de lenguaje
  // Separamos el texto en piezas para poder darle estilo al texto

  // let currentAboutData = language === "es" ? aboutData[0] : aboutData[1];
  return (
    <section className="content-about" id="content-about" tabIndex="0">
      <div className="content-about-text">
        <h2 className="About-Title">{currentAboutData.title}</h2>
        <div className="About-text">
          <p className="about-text-top">
            {currentAboutData.text.split("\n")[0]}
          </p>
          <p className="aboutTextMiddle">
            {currentAboutData.text.split("\n")[1]}
          </p>
          <p className="aboutTextBottom">
            {currentAboutData.text.split("\n")[2]}
          </p>
        </div>
      </div>
      <div className="About-skills">
        <h3>Skills</h3>
        <div className="About-skills-list">
          <img
            loading="lazy"
            src="img/html.webp"
            alt="html icon"
            decoding="async"
          />
          <img
            loading="lazy"
            src="img/javascript.svg"
            alt="javascript icon"
            decoding="async"
          />
          <img
            loading="lazy"
            src="img/CSS3.svg"
            alt="css icon"
            decoding="async"
          />
          <div>
            <img
              loading="lazy"
              src="img/react.webp"
              alt="React icon"
              decoding="async"
            />
            <p>React</p>
          </div>
          <div>
            <img
              loading="lazy"
              src="img/github.svg"
              alt="Github icon"
              decoding="async"
            />
            <p>Github</p>
          </div>
        </div>
      </div>
    </section>
  );
};
