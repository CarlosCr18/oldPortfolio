//navBar section
//the data is set depending on the language, we use the useEffect hook so the navbarSlider element starts in the correct position with the right size
//la informacion es asignada dependiendo del idioma, usamos el hook useEffect para que el elemento navbarSlider inicie con el tamano y posicion correctas

//navBar section specific to the text anchor links
const NavBarLinks = ({ currentNavBarData }) => {
  React.useEffect(() => {
    let slider = document.querySelector(".navBar-slider");
    let element = document.querySelector(".navBar-link");
    slider.style.width = element.offsetWidth * 1.2 + "px";
    slider.style.left = element.offsetLeft - element.offsetWidth * 0.1 + "px";
  }, []);

  return (
    <div>
      <ul className="navBar-list">
        <li>
          <a
            href="#main"
            aria-label={currentNavBarData.aria}
            className="navBar-link"
          >
            {currentNavBarData.home}
          </a>
        </li>
        <li>
          <a
            href="#content-about"
            aria-label={currentNavBarData.aria}
            className="navBar-link"
          >
            {currentNavBarData.about}
          </a>
        </li>
        <li>
          <a
            href="#content-projects"
            aria-label={currentNavBarData.aria}
            className="navBar-link"
          >
            {currentNavBarData.projects}
          </a>
        </li>
        <li>
          <a
            href="#content-form"
            aria-label={currentNavBarData.aria}
            className="navBar-link"
          >
            {currentNavBarData.contact}
          </a>
        </li>
        <li className="navBar-slider"></li>
      </ul>
    </div>
  );
};

//navBar section specific for the icons
const NavBarIcons = ({ currentNavBarData }) => {
  return (
    <nav className="navBar-icons" aria-label="Primary navigation">
      <div className="navBar-list-icons">
        <a
          href="https://github.com/CarlosCr18"
          target="_blank"
          tabIndex="0"
          aria-label="link to github"
          className="icon github"
          rel="noreferrer"
        >
          <div className="navBar-icon-title github-icon-title">Github</div>
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/carlos-lopez-crespo-02a890196/"
          target="_blank"
          tabIndex="0"
          aria-label="link to linkedin"
          className="icon linkedin"
          rel="noreferrer"
        >
          <div className="navBar-icon-title linkedin-icon-title">Linkedin</div>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          href={currentNavBarData.resumeUrl}
          tabIndex="0"
          aria-label="link to download"
          className="icon resume"
          download="Carlos Crespo developer resume"
        >
          <div className="navBar-icon-title resume-icon-title">Resume</div>
          <i className="fa fa-download" aria-hidden="true"></i>
        </a>
      </div>
    </nav>
  );
};

//Returns the full navbar with both text and icons sections selected
//Regresa la barra de navegacion completa con ambas partes de texto e iconos

const NavBar = ({ data }) => {
  return (
    <header className="navBar" data-visible="false">
      <NavBarLinks currentNavBarData={data} />
      <NavBarIcons currentNavBarData={data} />
    </header>
  );
};
