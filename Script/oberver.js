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
      if (entry.isIntersecting) {
        entry.target.querySelector(".title-2").classList.add("animate");
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