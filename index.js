var _slicedToArray = (function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    }
  };
})();

//Variable for the moveSlider function that moves the navbar background element
//variable para la funcion moveSlider que mueve el elemento de fondo de la barra de navegacion
var counter = 0;

var ContentIndex = function ContentIndex() {
  //We use useState hook to keep track of the language and rerender the content
  var _React$useState = React.useState("es"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    language = _React$useState2[0],
    setLanguage = _React$useState2[1];

  var data = language == "es" ? datajson.es : datajson.en;

  //Event listeners to change the slider in navBar page
  //the moveSlider function is called again after a timeout so it gets to the correct position when resizing the window
  //We use useEffect so its only called when the window is resized
  //Event listeners para cambiar el fondo en la barra de navegacion
  //La funcion moveSlider es llamada de nuevo despues de un tiempo para que obtenga la posicion correcta al cambiar el tamano de la ventana
  //Se usa useEffect para que solo sea llamada la funcion cuando el tamano de la ventana cambie

  React.useEffect(
    function () {
      moveSlider(counter);
      setTimeout(function () {
        moveSlider(counter);
      }, 300);
      window.addEventListener("resize", function () {
        return moveSlider(counter);
      });

      return function () {
        window.removeEventListener("resize", function () {
          return moveSlider();
        });
      };
    },
    [window.innerWidth, window.innerHeight, window.WindowState]
  );

  //Event listeners to call the navBarSlider function and close the navbar while in mobile/small screen device
  //We use useEffect so the listeners are only registered once when the component is created
  //Event listeners para llamar la funcion moveSlider y cerrar la barra de navegacion en dispositivos mobiles/pantall pequena
  //useEffect es usado para que los listeners solo se registren una sola vez cuando el componente es creado
  React.useEffect(function () {
    document.querySelector(".loadingHolder").style.display = "gone";
    var content = document.querySelectorAll(".navBar-link");
    content.forEach(function (element, index) {
      element.addEventListener(
        "click",
        function () {
          moveSlider(index);
          document.querySelector(".burgerMenu").click();
          counter = index;
        },
        true
      );
    });

    return function () {
      content.forEach(function (element) {
        element.addEventListener(
          "click",
          function () {
            moveSlider();
            counter = index;
          },
          true
        );
      });
    };
  }, []);

  return React.createElement(
    "div",
    { className: "contentDiv" },
    React.createElement(NavBar, { data: data.navBarData }),
    React.createElement(
      "nav",
      { className: "languageNav", "aria-label": "Language navigation" },
      React.createElement(
        "button",
        {
          "data-language": language === "en" ? "en" : "es",
          onClick: function onClick() {
            setLanguage("en");
            counter = 0;
            setTimeout(function () {
              moveSlider(counter);
            }, 15);
          },
        },
        "English"
      ),
      React.createElement(
        "button",
        {
          "data-language": language === "en" ? "es" : "en",
          onClick: function onClick() {
            setLanguage("es");
            counter = 0;
            setTimeout(function () {
              moveSlider(counter);
            }, 15);
          },
        },
        "Espanol"
      )
    ),
    React.createElement(LoadContent, { data: data })
  );
};

ReactDOM.render(
  React.createElement(ContentIndex, null),
  document.getElementById("ContentContainer")
);
