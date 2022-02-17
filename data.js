// data section of the webpage so we can change language within the same webpage using react
// Seccion de informacion de la webpage para poder cambiar el lenguaje dentro de la misma pagina usando react

let language = "es";

const datajson = {
  en: {
    navBarData: {
      aria: "navigation link",
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      resumeUrl: "resumeEnglish.pdf",
    },
    homeData: {
      title: "I'm Carlos Crespo",
      name: "Web developer",
      text: "This is my portfolio.",
    },
    aboutData: {
      title: "",
      text: "I'm a mechatronics engineer\n  I'm a wev developer\n I'm an autodidact developer, I have a Front End Development Libraries certificate recived from FreeCodeCamp and now I'm becoming a full stack developer.",
    },
    projectsData: {
      title: "Projects",
      text: "Here I show you a small list of projects that I've developed, some are more complex than the others or more aesthetic but I've learned so much developing each one of them, hope you enjoy them and any feedback is well welcomed.",
      projects: [
        {
          id: "Maskottchen",
          title: "Dog grooming center",
          img: "img/maskottchen.webp",
          imgAlt: "project maskottchen preview image",
          liveUrl: "https://carloscr18.github.io/Maskottchen/",
          github: "https://github.com/CarlosCr18/Maskottchen",
          text: "Frontpage for a dog grooming center and store",
          skills: [
            {
              url: "img/html.webp",
              alt: "HTML5",
            },
            {
              url: "img/javascript.svg",
              alt: "Javascript",
            },
            {
              url: "img/CSS3.svg",
              alt: "CSS3",
            },
            {
              url: "img/react.webp",
              alt: "React",
            },
          ],
        },
        {
          id: "NiponABC",
          title: "NiponABC",
          img: "img/niponabc.webp",
          imgAlt: "project niponabc preview image",
          liveUrl: "https://niponabc.herokuapp.com/",
          github: "https://niponabc.herokuapp.com/",
          text: "Learn the japanese alphabet playing",
          skills: [
            {
              url: "img/javascript.svg",
              alt: "Javascript",
            },
            {
              url: "img/CSS3.svg",
              alt: "CSS3",
            },
            {
              url: "img/react.webp",
              alt: "React",
            },
            {
              url: "img/next.svg",
              alt: "Next Js",
            },
          ],
        },
        {
          id: "RandomQuotes",
          title: "Random quotes generator",
          img: "img/randomquotes.webp",
          imgAlt: "project random quotes preview image",
          liveUrl: "https://carloscr18.github.io/randomQuotes/",
          github: "https://github.com/CarlosCr18/randomQuotes",
          text: "Get some inspiration from a random quote",
          skills: [
            {
              url: "img/javascript.svg",
              alt: "Javascript",
            },
            {
              url: "img/CSS3.svg",
              alt: "CSS3",
            },
            {
              url: "img/react.webp",
              alt: "React",
            },
            {
              url: "img/redux.svg",
              alt: "Redux",
            },
          ],
        },
        {
          id: "Pomodoro",
          title: "Pomodoro App",
          img: "img/pomodoro.webp",
          imgAlt: "project pomodoro preview image",
          liveUrl: "https://carloscr18.github.io/pomodoro/",
          github: "https://github.com/CarlosCr18/pomodoro",
          text: "A clock to keep track of your sessions length",
          skills: [
            {
              url: "img/javascript.svg",
              alt: "Javascript",
            },
            {
              url: "img/CSS3.svg",
              alt: "CSS3",
            },
            {
              url: "img/react.webp",
              alt: "React",
            },
          ],
        },
        {
          id: "Calculator",
          title: "Calculator app",
          img: "img/calculator.webp",
          imgAlt: "project calculator preview image",
          liveUrl: "https://carloscr18.github.io/Calculator-app/",
          github: "https://github.com/CarlosCr18/Calculator-app",
          text: "A simple calculator",
          skills: [
            {
              url: "img/javascript.svg",
              alt: "Javascript",
            },
            {
              url: "img/CSS3.svg",
              alt: "CSS3",
            },
            {
              url: "img/react.webp",
              alt: "React",
            },
          ],
        },
      ],
    },
    formData: {
      title: "Let's work together!",
      text: "Do you love development as much as I do? \n Do you have a project in mind that you think we can make it happen? \n My inbox is always open wether you are a potential client, a recruiter or you just want to say hello!",
      formSent: "Thank you for leaving a message, I will get to you soon!",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email address",
      textAreaLabel: "What's in your mind?",
      textAreaPlaceholder: "Your message",
      submitButtonText: "Send",
      submitLoadingText: "Sending...",
    },
  },
  es: {
    navBarData: {
      aria: "link de navegacion",
      home: "Inicio",
      about: "Acerca",
      projects: "Proyectos",
      contact: "Contacto",
      resumeUrl: "resume.pdf",
    },
    homeData: {
      title: "Soy Carlos Crespo",
      name: "Desarrollador web",
      text: "Este es mi portafolio.",
    },
    aboutData: {
      title: "",
      text: "Soy un ingeniero en mecatronica  \n Soy desarrollador web \n Soy un desarrollador autodidacta, tengo un certificado de Front End Development Libraries completado en freeCodeCamp y ahora estoy llegando a ser un desarrollador full stack.",
    },
    projectsData: {
      title: "Proyectos",
      text: "Aqui les presento una pequena lista de los proyectos que he desarrollado, algunos son mas complejos que otros o mas esteticos pero he aprendido bastante desarrollando cada uno de ellos, espero que los disfruten y cualquier retroalimentacion es bien recibida.",
      projects: [
        {
          id: "Maskottchen",
          title: "Maskottchen",
          img: "img/maskottchen.webp",
          imgAlt: "imagen de proyecto maskottchen ",
          liveUrl: "https://carloscr18.github.io/Maskottchen/",
          github: "https://github.com/CarlosCr18/Maskottchen",
          text: "Frontpage para estetica y tienda canina",
          skills: [
            {
              url: "img/html.webp",
              alt: "HTML5",
            },
            {
              url: "img/javascript.svg",
              alt: "Javascript",
            },
            {
              url: "img/CSS3.svg",
              alt: "CSS3",
            },
            {
              url: "img/react.webp",
              alt: "React",
            },
          ],
        },
        {
          id: "NiponABC",
          title: "NiponABC",
          img: "img/niponabc.webp",
          imgAlt: "imagen de proyecto niponabc",
          liveUrl: "https://niponabc.herokuapp.com/",
          github: "https://niponabc.herokuapp.com/",
          text: "Aprende el alfabeto japones jugando",
          skills: [
            {
              url: "img/javascript.svg",
              alt: "Javascript",
            },
            {
              url: "img/CSS3.svg",
              alt: "CSS3",
            },
            {
              url: "img/react.webp",
              alt: "React",
            },
            {
              url: "img/next.svg",
              alt: "Next Js",
            },
          ],
        },
        {
          id: "RandomQuotes",
          title: "Generador de citas al azar",
          img: "img/randomquotes.webp",
          imgAlt: "imagen de proyecto generador de citas",
          liveUrl: "https://carloscr18.github.io/randomQuotes/",
          github: "https://github.com/CarlosCr18/randomQuotes",
          text: "Inspirate con una cita famosa al azar",
          skills: [
            {
              url: "img/javascript.svg",
              alt: "Javascript",
            },
            {
              url: "img/CSS3.svg",
              alt: "CSS3",
            },
            {
              url: "img/react.webp",
              alt: "React",
            },
            {
              url: "img/redux.svg",
              alt: "Redux",
            },
          ],
        },
        {
          id: "Pomodoro",
          title: "Pomodoro App",
          img: "img/pomodoro.webp",
          imgAlt: "imagen proyecto Pomodoro",
          liveUrl: "https://carloscr18.github.io/pomodoro/",
          github: "https://github.com/CarlosCr18/pomodoro",
          text: "Temporizador para manejar tus sesiones",
          skills: [
            {
              url: "img/javascript.svg",
              alt: "Javascript",
            },
            {
              url: "img/CSS3.svg",
              alt: "CSS3",
            },
            {
              url: "img/react.webp",
              alt: "React",
            },
          ],
        },
        {
          id: "Calculator",
          title: "Calculadora app",
          img: "img/calculator.webp",
          imgAlt: "imagen de proyecto calculadora",
          liveUrl: "https://carloscr18.github.io/Calculator-app/",
          github: "https://github.com/CarlosCr18/Calculator-app",
          text: "Una calculadora simple",
          skills: [
            {
              url: "img/javascript.svg",
              alt: "Javascript",
            },
            {
              url: "img/CSS3.svg",
              alt: "CSS3",
            },
            {
              url: "img/react.webp",
              alt: "React",
            },
          ],
        },
      ],
    },
    formData: {
      title: "Trabajemos juntos!",
      text: "Te encanta desarrollar como a mi? \n Tienes algun proyecto en mente y crees que podemos colaborar juntos? \n Mi inbox siempre esta disponible no importa si eres un cliente potencial, un reclutador o simplemente quieres charlar!",
      formSent: "Gracias por mandar un mensaje, estaremos en contacto pronto!",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu direccion de email",
      textAreaLabel: "Que tienes en mente?",
      textAreaPlaceholder: "Tu mensaje",
      submitButtonText: "Enviar",
      submitLoadingText: "Enviando...",
    },
  },
};
