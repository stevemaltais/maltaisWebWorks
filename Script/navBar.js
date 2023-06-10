const nav = document.querySelector(".sidebar");
let lastScrollTop = 0;

const handleScroll = () => {
  const currentScrollTop = window.pageYOffset;

  if (currentScrollTop < lastScrollTop) {
    nav.classList.remove("nav-hidden");
    nav.classList.add("nav-show");
    nav.classList.remove("nav-hide");
  } else if (currentScrollTop > lastScrollTop && currentScrollTop > nav.offsetHeight) {
    nav.classList.add("nav-hidden");
    nav.classList.add("nav-hide");
    nav.classList.remove("nav-show");
  }

  // Ajouter ou supprimer la classe 'nav-scrolled'
  if (currentScrollTop > 0) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }

  lastScrollTop = currentScrollTop;
};

window.addEventListener("scroll", handleScroll);