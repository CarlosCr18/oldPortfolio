const ContentProjects = () => {
  let currentContent =
    language === "en" ? projectsData[0].english : projectsData[0].spanish;

  const projectsGallery = currentContent.map((e, index) => (
    <ProjectsCard project={e} key={index} />
  ));

  React.useEffect(() => {
    document
      .querySelectorAll(".project-card")[0]
      .classList.remove("project-card-inactive");
    document
      .querySelectorAll(".project-card")[0]
      .classList.add("project-card-active");
  }, []);

  const cardsActivator = (indexPassed) => {
    let content = document.querySelectorAll(".project-card");
    content.forEach((element, index) => {
      if (
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--small-screen") == 0
      ) {
        if (
          document
            .querySelectorAll(".project-card")
            [index].classList.contains("project-card-active")
        ) {
          document.querySelectorAll(".project-card")[
            index
          ].children[3].onclick = () => {
            document
              .querySelectorAll(".project-card")
              [index].children[5].children[0].click();
          };
        }
      } else {
        document.querySelectorAll(".project-card")[index].children[3].onclick =
          () => {
            document
              .querySelectorAll(".project-card")
              [index].children[5].children[0].click();
          };
      }

      if (index === indexPassed) {
        document
          .querySelectorAll(".project-card")
          [index].classList.remove("project-card-inactive");
        document
          .querySelectorAll(".project-card")
          [index].classList.add("project-card-active");
      } else {
        document
          .querySelectorAll(".project-card")
          [index].classList.add("project-card-inactive");
        document
          .querySelectorAll(".project-card")
          [index].classList.remove("project-card-active");
      }
    });
  };

  React.useEffect(() => {
    let content = document.querySelectorAll(".project-card");
    content.forEach((element, index) => {
      element.addEventListener(
        "click",
        () => {
          cardsActivator(index);
        },
        true
      );
    });

    return () => {
      content.forEach((element) => {
        element.addEventListener(
          "click",
          () => {
            cardsActivator();
          },
          true
        );
      });
    };
  }, []);

  return (
    <div className="content-projects" id="content-projects">
      <div className="projects-text">
        <h2>
          {language === "en"
            ? projectsData[0].englishTitle
            : projectsData[0].spanishTitle}
        </h2>
        <div className="projects-text-text">
          {language === "en"
            ? projectsData[0].englishText
            : projectsData[0].spanishText}
        </div>
      </div>
      <div className="projects-container">{projectsGallery}</div>
    </div>
  );
};

const ProjectsCard = (project) => {
  let currentProject = project.project;
  const currentProjectSkills = currentProject.skills.map((e, index) => (
    <ProjectSkills key={index} skills={e} />
  ));

  return (
    <div className="project-card project-card-inactive" tabIndex="0">
      <h3 className="project-card-title">{currentProject.title}</h3>
      <hr></hr>
      <br></br>
      <img
        className="project-card-img"
        alt={currentProject.imgAlt}
        src={currentProject.img}
      />
      <div className="project-card-container">{currentProjectSkills}</div>
      <div className="project-card-container">
        <a href={currentProject.liveUrl} target="_blank">
          Live
        </a>
        <a href={currentProject.github} target="_blank">
          <i className="fa fa-github" />
        </a>
      </div>
      <div className="project-card-text">
        <hr></hr>
        <br></br>
        {currentProject.text}
        <br></br>
      </div>
    </div>
  );
};

function ProjectSkills(skills) {
  let currentSkills = skills.skills;

  return (
    <img
      className="skills-img"
      key={currentSkills.url}
      src={currentSkills.url}
      alt={currentSkills.alt}
    />
  );
}
/*
ReactDOM.render(
  <ContentProjects />,
  document.getElementById("projectsDivContainer")
);
*/
