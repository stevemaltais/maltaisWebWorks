function createSplitText(text) {
  const container = document.createElement('span');
  container.setAttribute('aria-label', text);
  container.setAttribute('role', 'heading');
  container.classList.add('hidden');

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.setAttribute('aria-hidden', 'true');
    span.style.animationDelay = 0.9 + index / 10 + 's';
    span.textContent = char;
    container.appendChild(span);
  });

  return container;
}

function init(animatedTexts) {
  animatedTexts.forEach(animatedText => {
    const text = animatedText.dataset.text;
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
        threshold: 0.2,
      }
    );

    observer.observe(splitText);
  });

  const style = document.createElement('style');
  style.innerHTML = `
    .hidden span[data-char] {
      opacity: 0;
    }

    .visible span[data-char] {
      animation: fadeIn 1s ease forwards;
    }

    .ml2 span span {
      position: relative;
      animation: move-text-color 1.75s forwards;
      bottom: -1em;
      opacity: 0;
    }

    @keyframes move-text-color {
      0% {
        bottom: -0.2em;
        opacity: 1;
        color: var(--light-pink);
      }

      50% {
        bottom: 0.2em;
        color: var(--light-pink);
      }

      100% {
        bottom: 0;
        opacity: 1;
        color: $darklight;
      }
    }
  `;
  document.head.appendChild(style);
}

let competenceAnimatedTexts = document.querySelectorAll('.ml2[data-text="Compétences"]');
let contactAnimatedTexts = document.querySelectorAll('.ml2[data-text="Contact"]');

const competenceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!competenceAnimatedTexts[0].querySelector('span[aria-label]')) {
          init(competenceAnimatedTexts);
        }
        competenceObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: '-50px 0px',
    threshold: 0,
  }
);

const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!contactAnimatedTexts[0].querySelector('span[aria-label]')) {
          init(contactAnimatedTexts);
        }
        contactObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: '-50px 0px',
    threshold: 0,
  }
);

competenceObserver.observe(document.getElementById('competence'));
contactObserver.observe(document.getElementById('contact'));