gsap.registerPlugin(ScrollTrigger);

gsap.to(".navBar", {
  paddingTop: ".2rem",
  paddingBottom: "0.2rem",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#main",
    start: "top+=40px top", // start when top of trigger target hits 50% point of viewport
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
gsap.to("#content-about", {
  scrollTrigger: {
    trigger: "#content-about",
    start: "top-=10% center", // start when top of trigger target hits 50% point of viewport
    end: "bottom",
    markers: false,
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
gsap.to("#content-projects", {
  scrollTrigger: {
    trigger: "#content-projects",
    start: "top-=10% center", // start when top of trigger target hits 50% point of viewport
    end: "bottom",
    markers: false,
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

gsap.to("#content-form", {
  scrollTrigger: {
    trigger: "#content-form",
    start: "top-=10% center", // start when top of trigger target hits 50% point of viewport
    end: "bottom",
    markers: false,
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

gsap.to(".content-about-text", {
  x: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#content-about",
    start: "top-=20% center", // start when top of trigger target hits 50% point of viewport
    end: "bottom",
    markers: false,
    toggleActions: "play none none reverse ",
  },
});
gsap.to(".About-skills", {
  opacity: 1,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#content-about",
    start: "top-=20% center", // start when top of trigger target hits 50% point of viewport
    end: "bottom",
    markers: false,
    toggleActions: "play none none reverse ",
  },
});
gsap.to(".projects-text", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#content-projects",
    start: "top-=20% center", // start when top of trigger target hits 50% point of viewport
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
    start: "top center", // start when top of trigger target hits 50% point of viewport
    end: "bottom",
    markers: false,
    toggleActions: "play none none reverse ",
  },
});
/*
let windowS = document.getElementById("body");
let formOffset = document.getElementById("content-form").offsetTop;
let projectsOffset = document.getElementById("content-projects").offsetTop;
let projectsEnd =
  document.getElementById("content-projects").offsetTop +
  document.getElementById("content-projects").clientHeight;
console.log(windowS.scrollTop, formOffset);
var scrollMaxY =
  window.scrollMaxY ||
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", function () {
  console.log(window.scrollY, formOffset, projectsOffset, projectsEnd);
  if (window.scrollY >= scrollMaxY) {
    moveSlider(3);
    console.log("max reached", scrollMaxY);
  }
});
*/
