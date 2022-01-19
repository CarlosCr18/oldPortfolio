const NavBarLinks = () => {
  let currentNavBarData = language === "en" ? navBarData[0] : navBarData[1];
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

const NavBarIcons = () => {
  let currentNavBarData = language === "en" ? navBarData[0] : navBarData[1];
  return (
    <nav className="navBar-icons">
      <div className="navBar-list-icons">
        <a
          href="https://github.com/CarlosCr18"
          target="_blank"
          tabIndex="0"
          aria-label="link to github"
          className="icon github"
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
        >
          <div className="navBar-icon-title linkedin-icon-title">Linkedin</div>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          href={currentNavBarData.resumeUrl}
          target="_blank"
          tabIndex="0"
          aria-label="link to download"
          className="icon resume"
          download
        >
          <div className="navBar-icon-title resume-icon-title">Resume</div>
          <i className="fa fa-download" aria-hidden="true"></i>
        </a>
      </div>
    </nav>
  );
};

const NavBar = () => {
  return (
    <header className="navBar" data-visible="false">
      <NavBarLinks />
      <NavBarIcons />
    </header>
  );
};

//ReactDOM.render(<NavBar />, document.getElementById("navBar"));
