const navLinks = document.querySelectorAll(".nav-list__item a");

// // const header = document.querySelector("header.header");
const topMenuHeight = header.offsetHeight + 1;

const hash = window.location.hash;

window.onload = () => {
  if (hash) {
  }
};

// TODO for link click event
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    mobileMenu.classList.remove("active");
    hamburgerBtn.classList.remove("is-active");

    let linkID = e.target.getAttribute("data-href").substring(1);
  });
});

//TODO when the target element is in view
// Create a new IntersectionObserver that will call the callback function

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute("id");

        const navItems = document.querySelectorAll(
          `.nav-list__item a[data-href="#${sectionId}"]`
        );

        navLinks.forEach((link) => {
          link.parentElement.classList.remove("isInView");
        });

        navItems.forEach((item) => {
          // console.log(item.parentElement);
          item.parentElement.classList.add("isInView");
        });
      }
    });
  },
  {
    rootMargin: `-${topMenuHeight}px 0px -${topMenuHeight}px 0px`,
    // threshold: 0.5,
  }
);

const sections = document.querySelectorAll("section");
sections.forEach((section) => observer.observe(section));

// TODO functions
function scrollToSection(id) {
  let elem = document.getElementById(id);

  if (!elem) {
    return false;
  }

  const scrollTop = id === "#" ? 0 : elem.offsetTop - topMenuHeight + 1;

  window.scrollTo({
    top: scrollTop,
    behavior: "smooth",
  });
}
