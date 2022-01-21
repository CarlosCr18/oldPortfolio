// Projects section
// The data is set depending on the language
// then we map the projects data so we can render all the projects

// La informacion es asignada dependiendo del idioma
// se mapea la informacion de los proyectos para renderizar todos los proyectos

const ContentProjects = () => {
  let currentContent =
    language === "en" ? projectsData[0].english : projectsData[0].spanish;

  const projectsGallery = currentContent.map((e, index) => (
    <ProjectsCard project={e} key={index} />
  ));

  // the useEffect hook is used so on the component creation only the first project
  // has the class project-card-active
  // Se usa el hook useEffect para que en la creacion del componente solo el primer
  // proyecto tenga la class project-card-active

  React.useEffect(() => {
    document
      .querySelectorAll(".project-card")[0]
      .classList.remove("project-card-inactive");
    document
      .querySelectorAll(".project-card")[0]
      .classList.add("project-card-active");
  }, []);

  //cardActivator function
  // it gets an index and sets the index project with the class project-card-active and
  // removes it from the rest of the projects
  // obtiene un valor index y agrega al proyecto index con la clase project-card-active
  // y le retira del resto de los proyectos
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

  //useEffect to call the cardsActivator function and register the listener for the projects
  //only on create of the component
  //useEffect para llamar a la funcion cardsActivator y registrar el listener de los projectos
  //solo en la creacion del componente
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

  //projects content
  //contenido de proyectos
  return (
    <section className="content-projects" id="content-projects">
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
    </section>
  );
};

//specific project content
//Contenido especifico de un proyecto
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
        <a
          href={currentProject.liveUrl}
          aria-label="link to live page"
          target="_blank"
        >
          Live
        </a>
        <a
          href={currentProject.github}
          aria-label="link to github page"
          target="_blank"
        >
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

//specific project skills images
//imagenes de skills de un proyecto en especifico
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
