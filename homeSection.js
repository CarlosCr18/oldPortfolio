const ContentHome = () => {
  let currentHomeData = language === "es" ? homeData[0] : homeData[1];
  return (
    <div className="content-home" id="content-home">
      <h1 className="home-title">{currentHomeData.title}</h1>
      <div className="home-text"></div>
      <div className="home-text-portfolio">{currentHomeData.text}</div>
    </div>
  );
};

//ReactDOM.render(<ContentHome />, document.getElementById("homeDivContainer"));
