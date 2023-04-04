function createSplitText(text) {
  const container = document.createElement('span');
  container.setAttribute('aria-label', text);
  container.setAttribute('role', 'heading');
  container.classList.add('hidden');

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.setAttribute('aria-hidden', 'true');
    span.style.animationDelay = 0.5 + index / 10 + 's';
    span.textContent = char;
    container.appendChild(span);
  });

  return container;
}

function init() {
  const text = 'Entrer en Contact';
  const animatedText = document.getElementById('animated-text');
  const splitText = createSplitText(text);
  animatedText.appendChild(splitText);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden');
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  observer.observe(splitText);
}

init();