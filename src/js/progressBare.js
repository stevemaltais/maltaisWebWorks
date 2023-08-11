



  function progessBar() {
  const devProgress = document.querySelector('#dev-progress');


  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
    bar.setAttribute('data-initial-width', '0');
  });

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll('.progress');
        const barsArray = Array.from(progressBars);
        for (let i = 0; i < barsArray.length; i++) {
          setTimeout(() => {
            barsArray[i].style.width = barsArray[i].getAttribute('data-width') + '%';
          }, i * 500);
        }
      } else {
        // Réinitialiser l'animation lorsqu'un élément sort du viewport
        const progressBars = entry.target.querySelectorAll('.progress');
        const barsArray = Array.from(progressBars);
        for (let bar of barsArray) {
          bar.style.width = '0%';
        }
      }
    });
  }, { threshold: 0.1 });  // La fonction de rappel sera déclenchée lorsque 10% de l'élément est visible.

  // Observer les éléments
  observer.observe(devProgress);
  

};

export default progessBar;