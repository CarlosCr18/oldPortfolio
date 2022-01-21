// Home section
// We only get the data and show it depending on the language
// Solo se obtiene la informacion y se muestra dependiendo del lenguaje

const ContentHome = () => {
  let currentHomeData = language === "es" ? homeData[0] : homeData[1];
  return (
    <section className="content-home" id="content-home">
      <h1 className="home-title">{currentHomeData.title}</h1>
      <div className="home-text"></div>
      <div className="home-text-portfolio">{currentHomeData.text}</div>
    </section>
  );
};
