//Holder Section to return semantically correct html
//Seccion para regresar html semanticamente correcto

const LoadContent = ({ data }) => {
  return (
    <main id="main">
      <ContentHome currentHomeData={data.homeData} />
      <ContentAbout currentAboutData={data.aboutData} />
      <ContentProjects currentProjectsData={data.projectsData} />
      <ContentContact formCurrentData={data.formData} />
    </main>
  );
};
