let language = "es";

const navBarData = [
  {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    resumeUrl: "/resumeEnglish.pdf",
  },
  {
    home: "Inicio",
    about: "Acerca",
    projects: "Proyectos",
    contact: "Contacto",
    resumeUrl: "/resume.pdf",
  },
];

const homeData = [
  {
    title: "Soy Carlos Crespo",
    name: "Desarrollador web",
    text: "Este es mi portafolio.",
  },
  {
    title: "I'm Carlos Crespo",
    name: "Web developer",
    text: "This is my portfolio.",
  },
];

const aboutData = [
  {
    title: "Acerca de mi",
    text: "Hola mi nombre es Carlos Crespo \n Soy un ingeniero en mecatronica con un gran interes en la tecnologia que quiere expandir sus horizontes y ahora desempenarme como desarrollador web iniciando como front end \n Soy un desarrollador front end autodidacta, comenze mi viaje en FreeCodeCamp en agosto del 2021 completando su certificado de Front End Development Libraries en noviembe del 2021, despues he seguido estudiando por mi cuenta con youtube e internet.",
  },
  {
    title: "About me",
    text: "Hello I'm Carlos Crespo,\n  I'm a mechatronics engineer with great interest in technology who wants to expand his horizons and pursue a career as a web developer starting as a front end developer.\n I'm an autodidact front end developer, I started my journey as a front end developer in August 2021 at FreeCodeCamp completing their course and recieving a Front End Development Libraries certificate in November 2021, from then on I've been learning through web articles, stackoverflow and youtube.",
  },
];

const projectsData = [
  {
    englishTitle: "Projects",
    spanishTitle: "Proyectos",
    englishText:
      "Here I show you a small list of projects that I've developed, some are more complex than the others or more aesthetic but I've learned so much developing each one of them, hope you enjoy them and any feedback is well welcomed.",
    spanishText:
      "Aqui les presento una pequena lista de los proyectos que he desarrollado, algunos son mas complejos que otros o mas esteticos pero he aprendido bastante desarrollando cada uno de ellos, espero que los disfruten y cualquier retroalimentacion es bien recibida.",
    english: [
      {
        id: "Maskottchen",
        title: "Dog grooming center",
        img: "img/maskottchen.webp",
        imgAlt: "project 1 image",
        liveUrl: "https://carloscr18.github.io/Maskottchen/",
        github: "https://github.com/CarlosCr18/Maskottchen",
        text: "frontpage for a dog grooming center and store",
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
        id: "Pomodoro",
        title: "Pomodoro App",
        img: "img/pomodoro.webp",
        imgAlt: "project 2 image",
        liveUrl: "pomodoro",
        github: "",
        text: "Pomodoro clock developed with react",
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
        id: "RandomQuotes",
        title: "Random quotes generator",
        img: "img/randomquotes.webp",
        imgAlt: "project 3 image",
        liveUrl: "random",
        github: "",
        text: "developed with react-redux",
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
        id: "Calculator",
        title: "Calculator app",
        img: "img/calculator.webp",
        imgAlt: "project 4 image",
        liveUrl: "https://carloscr18.github.io/Calculator-app/",
        github: "https://github.com/CarlosCr18/Calculator-app",
        text: "Developed with react",
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
    spanish: [
      {
        id: "Maskottchen",
        title: "Maskottchen",
        img: "img/maskottchen.webp",
        imgAlt: "imagen de proyecto 1 ",
        liveUrl: "https://carloscr18.github.io/Maskottchen/",
        github: "https://github.com/CarlosCr18/Maskottchen",
        text: "frontpage para estetica y tienda canina",
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
        id: "Pomodoro",
        title: "Pomodoro App",
        img: "img/pomodoro.webp",
        imgAlt: "imagen proyecto 2",
        liveUrl: "",
        github: "",
        text: "Reloj pomodoro desarrolado con react",
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
        id: "RandomQuotes",
        title: "Generador de citas al azar",
        img: "img/randomquotes.webp",
        imgAlt: "imagen de proyecto 3",
        liveUrl: "",
        github: "",
        text: "desarrolado con react-redux",
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
        id: "Calculator",
        title: "Calculadora app",
        img: "img/calculator.webp",
        imgAlt: "imagen de proyecto 4",
        liveUrl: "https://carloscr18.github.io/Calculator-app/",
        github: "https://github.com/CarlosCr18/Calculator-app",
        text: "Desarrolada con react",
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
];

const formData = [
  {
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
  {
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
];
