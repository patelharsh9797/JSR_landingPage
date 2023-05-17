const navLinks = document.querySelectorAll(".nav-list__item a");

// // const header = document.querySelector("header.header");
const topMenuHeight = header.offsetHeight + 1;

const hash = window.location.hash;

window.onload = () => {
  if (hash) scrollToSection(hash.substr(1));
};

// TODO for link click event
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    mobileMenu.classList.remove("active");
    hamburgerBtn.classList.remove("is-active");

    let linkID = e.target.getAttribute("data-href").substring(1);
    scrollToSection(linkID);
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

        linkActive(navItems);
      } else {
        const homeLinks = document.querySelectorAll(
          ".headerLinks a[data-href='#home']"
        );

        linkActive(homeLinks);
      }
    });
  },
  {
    rootMargin: `-${topMenuHeight}px 0px -${topMenuHeight}px 0px`,
    // threshold: 0.5,
  }
);

const secObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("now_inView");
    } else {
      entry.target.classList.remove("now_inView");
    }
  });
});

const featureSec = document.querySelector("section.featuresSection"); // Define secs before using secObserver.observe(sec)
secObserver.observe(featureSec);

const sections = document.querySelectorAll("section[id]");
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

function linkActive(elements) {
  navLinks.forEach((link) => {
    link.parentElement.classList.remove("isInView", "isActive");
  });

  elements.forEach((elem) => {
    elem.parentElement.classList.add("isInView");
  });
}
