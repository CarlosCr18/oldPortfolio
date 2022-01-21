const ContentAbout = () => {
  //About me section
  //first set the data from source depending on the language
  //we split the text into pieces and adding carriage returns to style the text
  // Seccion acerca de
  // Primero sleccionamos la informacion dependiendo de lenguaje
  // Separamos el texto en piezas para poder darle estilo al texto

  let currentAboutData = language === "es" ? aboutData[0] : aboutData[1];
  return (
    <section className="content-about" id="content-about">
      <div className="content-about-text">
        <h2 className="About-Title">
          {language === "es" ? aboutData[0].title : aboutData[1].title}
        </h2>
        <div className="About-text">
          {currentAboutData.text.split("\n")[0]}
          <br></br>
          {currentAboutData.text.split("\n")[1]}
          <br></br>
          <br></br>
          {currentAboutData.text.split("\n")[2]}
        </div>
      </div>
      <div className="About-skills">
        <h3>Skills</h3>
        <div className="About-skills-list">
          <img src="img/html.webp" alt="html icon" />
          <img src="img/javascript.svg" alt="javascript icon" />
          <img src="img/CSS3.svg" alt="css icon" />
          <div>
            <img src="img/react.webp" alt="React icon" />
            <p>React</p>
          </div>
          <div>
            <img src="img/github.svg" alt="Github icon" />
            <p>Github</p>
          </div>
        </div>
      </div>
    </section>
  );
};
