gsap.registerPlugin(ScrollTrigger);

window.addEventListener("scroll", () => {
  const progress =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});

gsap.to(".pulsating-circle", {
  scrollTrigger: {
    trigger: "#pulsating-light",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
  },
  scale: 1.5,
});

gsap.to(".gradient-box", {
  scrollTrigger: {
    trigger: "#gradient-scroll",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
  backgroundPosition: "100% 50%",
});