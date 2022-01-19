const ContentAbout = () => {
  return (
    <div className="content-about" id="content-about">
      <div className="content-about-text">
        <h2 className="About-Title">
          {language === "es" ? aboutData[0].title : aboutData[1].title}
        </h2>
        <div className="About-text">
          {language === "es"
            ? aboutData[0].text.split("\n")[0]
            : aboutData[1].text.split("\n")[0]}
          <br></br>
          {language === "es"
            ? aboutData[0].text.split("\n")[1]
            : aboutData[1].text.split("\n")[1]}
          <br></br>
          <br></br>
          {language === "es"
            ? aboutData[0].text.split("\n")[2]
            : aboutData[1].text.split("\n")[2]}
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
    </div>
  );
};

//ReactDOM.render(<ContentAbout />, document.getElementById("aboutDivContainer"));
