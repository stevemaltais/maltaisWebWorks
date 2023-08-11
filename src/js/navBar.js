import initializeScroll from './scroll'; // Modifier avec le chemin correct

const nav = document.querySelector(".sidebar");
let lastScrollTop = 0;

const scroll = initializeScroll(); // Obtenez votre instance de Locomotive Scroll ici

scroll.on('scroll', (func) => {
  const currentScrollTop = func.scroll.y;

  // Si nous sommes en haut de la page
  if (currentScrollTop <= 0) {
    nav.classList.remove("nav-show");
    nav.classList.remove("nav-scrolled");
    // Ajouter d'autres logiques si nécessaire pour rétablir l'état initial
  } else if (currentScrollTop < lastScrollTop) {
    nav.classList.remove("nav-hidden");
    nav.classList.add("nav-show");
    nav.classList.remove("nav-hide");
  } else if (currentScrollTop > lastScrollTop && currentScrollTop > nav.offsetHeight) {
    nav.classList.add("nav-hidden");
    nav.classList.remove("nav-show");
    nav.classList.add("nav-hide");
  }

  // Ajouter ou supprimer la classe 'nav-scrolled'
  if (currentScrollTop > 0) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }

  lastScrollTop = currentScrollTop;
});

export default nav; 
