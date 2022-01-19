const ContentHome = () => {
  return (
    <div className="content-home" id="content-home">
      <h1 className="home-title">
        {language === "es" ? homeData[0].title : homeData[1].title}
      </h1>
      <div className="home-text"></div>
      <div className="home-text-portfolio">
        {language === "es" ? homeData[0].text : homeData[1].text}
      </div>
    </div>
  );
};

//ReactDOM.render(<ContentHome />, document.getElementById("homeDivContainer"));
