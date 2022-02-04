// onScroll section
// Gsap is used to animate elements while scrolling, call the navbarSlider function so the navbar background is always behind
// the current user positon on the page and to change the position of the navbar on big screens
// Gsap es usado para animar los elementos mientras se avanza por la pagina, llama a la funcion navBarSlider para que el fondo
// de la barra de navegacion este actualizado en la posicion del usuario en la pagina y tambien para cambiar la posicion de la
// barra de navegacion en pantallas grandes

gsap.registerPlugin(ScrollTrigger);

gsap.to(".navBar", {
  paddingTop: ".2rem",
  paddingBottom: "0.2rem",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#main",
    start: "top+=40px top",
    end: "bottom",
    toggleActions: "play none none reverse ",
    markers: false,
    onEnter: () => {
      if (
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--small-screen") == 0
      ) {
        setTimeout(() => {
          document.querySelector(".navBar").style.position = "fixed";
        }, 30);
      }
    },
    onLeaveBack: () => {
      if (
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--small-screen") == 0
      ) {
        document.querySelector(".navBar").style.position = "relative";
      }
    },
  },
});
gsap.to(".content-about-text", {
  x: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#content-about",
    start: "top-=10% center",
    end: "bottom",
    markers: false,
    toggleActions: "play none none reverse ",
    onEnter: () => {
      moveSlider(1);
      counter = 1;
    },
    onLeaveBack: () => {
      moveSlider(0);
      counter = 0;
    },
  },
});
gsap.to(".projects-text", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#content-projects",
    start: "top-=10% center",
    end: "bottom",
    markers: false,
    toggleActions: "play none none reverse ",
    onEnter: () => {
      moveSlider(2);
      counter = 2;
    },
    onLeaveBack: () => {
      moveSlider(1);
      counter = 1;
    },
  },
});

gsap.to(".content-form-container", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#content-form",
    start: "top-=10% center",
    end: "bottom",
    markers: false,
    toggleActions: "play none none reverse ",
    onEnter: () => {
      moveSlider(3);
      counter = 3;
    },
    onLeaveBack: () => {
      moveSlider(2);
      counter = 2;
    },
  },
});

gsap.to(".About-skills", {
  opacity: 1,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#content-about",
    start: "top-=20% center",
    end: "bottom",
    markers: false,
    toggleActions: "play none none reverse ",
  },
});
gsap.to(".projects-container", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#content-projects",
    start: "top center",
    end: "bottom",
    markers: false,
    toggleActions: "play none none reverse ",
  },
});
