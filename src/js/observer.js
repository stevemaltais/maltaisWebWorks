function observer(){ 

document.addEventListener("DOMContentLoaded", function () {
    initObserver();
  });
  
  function initObserver() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  
    const observerCompetence = new IntersectionObserver(handleIntersectCompetence, options);
    const targetCompetence = document.querySelector("#competence");
    observerCompetence.observe(targetCompetence);
  
    const observerContact = new IntersectionObserver(handleIntersectContact, options);
    const targetContact = document.querySelector("#contact");
    observerContact.observe(targetContact);
  }
  
  function handleIntersectCompetence(entries) {
    entries.forEach((entry) => {
      const titleElement = entry.target.querySelector(".title-2");
      if (entry.isIntersecting) {
        titleElement.classList.add("animate");
      } else {
        titleElement.classList.remove("animate");
  
        // Forcer le redémarrage de l'animation
        titleElement.style.animation = 'none';
        titleElement.offsetHeight; // Cause un reflow, permettant à l'animation de redémarrer
        titleElement.style.animation = null; 
      }
    });
  }
  
  function handleIntersectContact(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelector(".contact p").classList.add("animate");
      }
    });
  }
}
  export default observer;


