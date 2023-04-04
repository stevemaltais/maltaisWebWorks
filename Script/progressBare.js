const devProgress = document.querySelector('#dev-progress');
const designProgress = document.querySelector('#DESIGN-progress');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('scroll', function() {
    if (isInViewport(devProgress) || isInViewport(designProgress)) {
      const progressBars = devProgress.querySelectorAll('.progress');
      progressBars.forEach(bar => {
        bar.setAttribute('data-initial-width', '0');
      });
      const barsArray = Array.from(progressBars);
      for (let i = 0; i < barsArray.length; i++) {
        setTimeout(() => {
          barsArray[i].style.width = barsArray[i].getAttribute('data-width') + '%';
        }, i * 500);
      }
    }
  });
  const progressBars = document.querySelectorAll('.progress');
progressBars.forEach(bar => {
  bar.setAttribute('data-initial-width', '0');
});
const barsArray = Array.from(progressBars);
for (let i = 0; i < barsArray.length; i++) {
  setTimeout(() => {
    barsArray[i].style.width = barsArray[i].getAttribute('data-width') + '%';
  }, i * 500);
}