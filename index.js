const colors = ["#794", "#aaa", "#333", "#fff"];
let counter = 0;

const ContentIndex = () => {
  const [reload, setReload] = React.useState(true);

  const setLanguages = (lang) => {
    //language = language === "en" ? "es" : "en";
    language = lang;
  };
  //Event listeners to change the slider in navBar page

  React.useEffect(() => {
    moveSlider(counter);
    setTimeout(() => {
      moveSlider(counter);
    }, 300);
    window.addEventListener("resize", () => moveSlider(counter));

    return () => {
      window.removeEventListener("resize", () => moveSlider());
    };
  }, [window.innerWidth, window.innerHeight, window.WindowState]);

  React.useEffect(() => {
    let content = document.querySelectorAll(".navBar-link");
    content.forEach((element, index) => {
      element.addEventListener(
        "click",
        () => {
          moveSlider(index);
          document.querySelector(".burgerMenu").click();
          counter = index;
        },
        true
      );
    });

    return () => {
      content.forEach((element) => {
        element.addEventListener(
          "click",
          () => {
            moveSlider();
            counter = index;
          },
          true
        );
      });
    };
  }, []);

  return (
    <div className="contentDiv">
      <NavBar />
      <div className="footer">
        <button
          data-language={language === "en" ? "en" : "es"}
          onClick={() => {
            setLanguages("en");
            counter = 0;
            setReload(() => !reload);
            setTimeout(() => {
              moveSlider(counter);
            }, 15);
          }}
        >
          English
        </button>
        <button
          data-language={language === "en" ? "es" : "en"}
          onClick={() => {
            setLanguages("es");
            counter = 0;
            setReload(() => !reload);
            setTimeout(() => {
              moveSlider(counter);
            }, 15);
          }}
        >
          Espanol
        </button>
      </div>
      <LoadContent />
    </div>
  );
};

ReactDOM.render(<ContentIndex />, document.getElementById("ContentContainer"));
