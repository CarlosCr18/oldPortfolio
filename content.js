//Holder Section to return semantically correct html
//Seccion para regresar html semanticamente correcto

var LoadContent = function LoadContent(_ref) {
  var data = _ref.data;

  return React.createElement(
    "main",
    { id: "main" },
    React.createElement(ContentHome, { currentHomeData: data.homeData }),
    React.createElement(ContentAbout, { currentAboutData: data.aboutData }),
    React.createElement(ContentProjects, { currentProjectsData: data.projectsData }),
    React.createElement(ContentContact, { formCurrentData: data.formData })
  );
};