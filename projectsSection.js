// Projects section
// The data is set depending on the language
// then we map the projects data so we can render all the projects

// La informacion es asignada dependiendo del idioma
// se mapea la informacion de los proyectos para renderizar todos los proyectos

var ContentProjects = function ContentProjects(_ref) {
  var currentProjectsData = _ref.currentProjectsData;

  var smallScreen =
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--small-screen") == 1
      ? true
      : false;

  // let currentContent =
  //   language === "en" ? projectsData[0].english : projectsData[0].spanish;
  var projectsGallery = currentProjectsData.projects.map(function (e, index) {
    return React.createElement(ProjectsCard, { currentProject: e, key: index });
  });

  // the useEffect hook is used to set the active class on project-card elements at creation
  // Se usa el hook useEffect para que en la creacion del componente se asigne la clase active
  //en los elementos project-card

  React.useEffect(function () {
    if (smallScreen) {
      document
        .querySelectorAll(".project-card")
        .forEach(function (element, index) {
          element.classList.remove("project-card-inactive");
          element.classList.add("project-card-active");
        });
    } else {
      document
        .querySelectorAll(".project-card")[0]
        .classList.remove("project-card-inactive");
      document
        .querySelectorAll(".project-card")[0]
        .classList.add("project-card-active");
    }
  }, []);

  //cardActivator function
  // when the component is created it registers a listener for the active component image click
  // it gets an index and sets the index project with the class project-card-active and
  // removes it from the rest of the projects
  // cuando el componente es creado se registra un listener para el click sobre su imagen
  // obtiene un valor index y agrega al proyecto index con la clase project-card-active
  // y le retira del resto de los proyectos
  var cardsActivator = function cardsActivator(indexPassed) {
    var content = document.querySelectorAll(".project-card");

    content.forEach(function (element, index) {
      if (index === indexPassed) {
        element.classList.remove("project-card-inactive");
        element.classList.add("project-card-active");
      } else {
        if (!smallScreen) {
          element.classList.add("project-card-inactive");
          element.classList.remove("project-card-active");
        }
      }

      if (element.classList.contains("project-card-active")) {
        element.children[3].onclick = function () {
          element.children[5].children[0].click();
        };
      }
    });
  };

  //useEffect to call the cardsActivator function and register the listener for the projects
  //only on create of the component
  //useEffect para llamar a la funcion cardsActivator y registrar el listener de los projectos
  //solo en la creacion del componente
  React.useEffect(function () {
    var content = document.querySelectorAll(".project-card");
    content.forEach(function (element, index) {
      element.addEventListener(
        "click",
        function () {
          cardsActivator(index);
        },
        true
      );
    });

    return function () {
      content.forEach(function (element) {
        element.addEventListener(
          "click",
          function () {
            cardsActivator();
          },
          true
        );
      });
    };
  }, []);

  //projects content
  //contenido de proyectos
  return React.createElement(
    "section",
    { className: "content-projects", id: "content-projects", tabIndex: "0" },
    React.createElement(
      "div",
      { className: "projects-text" },
      React.createElement("h2", null, currentProjectsData.title),
      React.createElement(
        "div",
        { className: "projects-text-text" },
        currentProjectsData.text
      )
    ),
    React.createElement(
      "div",
      { className: "projects-container" },
      projectsGallery
    )
  );
};

//specific project content
//Contenido especifico de un proyecto
var ProjectsCard = function ProjectsCard(_ref2) {
  var currentProject = _ref2.currentProject;

  var currentProjectSkills = currentProject.skills.map(function (e, index) {
    return React.createElement(ProjectSkills, { key: index, currentSkills: e });
  });

  return React.createElement(
    "div",
    { className: "project-card project-card-inactive", tabIndex: "0" },
    React.createElement(
      "h3",
      { className: "project-card-title" },
      currentProject.title
    ),
    React.createElement("hr", null),
    React.createElement("br", null),
    React.createElement("img", {
      className: "project-card-img",
      alt: currentProject.imgAlt,
      src: currentProject.img,
      loading: "lazy",
      decoding: "async",
    }),
    React.createElement(
      "div",
      { className: "project-card-container" },
      currentProjectSkills
    ),
    React.createElement(
      "div",
      { className: "project-card-container" },
      React.createElement(
        "a",
        {
          href: currentProject.liveUrl,
          "aria-label": "link to live page",
          target: "_blank",
          rel: "noreferrer",
        },
        "Live"
      ),
      React.createElement(
        "a",
        {
          href: currentProject.github,
          "aria-label": "link to github page",
          target: "_blank",
          rel: "noreferrer",
        },
        React.createElement("i", { className: "fa fa-github" })
      )
    ),
    React.createElement(
      "div",
      { className: "project-card-text" },
      React.createElement("hr", null),
      React.createElement("br", null),
      currentProject.text,
      React.createElement("br", null)
    )
  );
};

//specific project skills images
//imagenes de skills de un proyecto en especifico
function ProjectSkills(_ref3) {
  var currentSkills = _ref3.currentSkills;

  return React.createElement("img", {
    className: "skills-img",
    key: currentSkills.url,
    src: currentSkills.url,
    alt: currentSkills.alt,
    loading: "lazy",
    decoding: "async",
  });
}
