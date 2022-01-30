// Home section
// We only get the data and show it depending on the language
// Solo se obtiene la informacion y se muestra dependiendo del lenguaje

const ContentHome = ({ currentHomeData }) => {
  return (
    <section className="content-home" id="content-home">
      <h1 className="home-title">{currentHomeData.title}</h1>
      <div className="home-text"></div>
      <div className="home-text-portfolio">{currentHomeData.text}</div>
    </section>
  );
};
