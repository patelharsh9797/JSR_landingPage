$(".faq-slider")
  .slick({
    dots: !0,
    infinite: !0,
    autoplay: !0,
    arrows: !0,
    speed: 1e3,
    prevArrow: "",
    nextArrow: "",
    slidesToShow: 1,
    slidesToScroll: 1,
  })
  .slickAnimation();

// TODO: Variables

const header = document.querySelector(".header");
// ? For sidebar navigation on small width
const hamburgerBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-list-m");

// TODO: Eventlistener

window.addEventListener("scroll", function () {
  window.scrollY > 50
    ? header.classList.add("active")
    : header.classList.remove("active");
});

// ? For sidebar navigation on small width
hamburgerBtn.addEventListener("click", () => {
  if (!hamburgerBtn.classList.contains("is-active")) {
    hamburgerBtn.classList.add("is-active");
    mobileMenu.classList.add("active");
  } else {
    hamburgerBtn.classList.remove("is-active");
    mobileMenu.classList.remove("active");
  }
});

// TODO: functions
