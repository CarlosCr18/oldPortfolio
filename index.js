//Variable for the moveSlider function that moves the navbar background element
//variable para la funcion moveSlider que mueve el elemento de fondo de la barra de navegacion
let counter = 0;

const ContentIndex = () => {
  //We use useState hook to keep track of the language and rerender the content
  //El hook useState es usado para recargar el contenido de la pagina segun la variable del lenguaje
  const [reload, setReload] = React.useState(true);

  //function to set language
  //funcion para cambiar el lenguaje
  const setLanguages = (lang) => {
    language = lang;
  };

  //Event listeners to change the slider in navBar page
  //the moveSlider function is called again after a timeout so it gets to the correct position when resizing the window
  //We use useEffect so its only called when the window is resized
  //Event listeners para cambiar el fondo en la barra de navegacion
  //La funcion moveSlider es llamada de nuevo despues de un tiempo para que obtenga la posicion correcta al cambiar el tamano de la ventana
  //Se usa useEffect para que solo sea llamada la funcion cuando el tamano de la ventana cambie

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

  //Event listeners to call the navBarSlider function and close the navbar while in mobile/small screen device
  //We use useEffect so the listeners are only registered once when the component is created
  //Event listeners para llamar la funcion moveSlider y cerrar la barra de navegacion en dispositivos mobiles/pantall pequena
  //useEffect es usado para que los listeners solo se registren una sola vez cuando el componente es creado
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
      <nav className="languageNav" aria-label="Language navigation">
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
      </nav>
      <LoadContent />
    </div>
  );
};

ReactDOM.render(<ContentIndex />, document.getElementById("ContentContainer"));
