function textWrapper(){


// Crée un élément span pour chaque caractère du texte donné
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

// Initialise les animations pour les éléments de texte donnés
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
          } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');

            // Forcer le redémarrage de l'animation
            let parent = entry.target.parentNode;
            if (parent) {
              let detachedElement = parent.removeChild(entry.target);
              void entry.target.offsetWidth;
              parent.appendChild(detachedElement);
            }
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

  // Ajoute les styles d'animation au document
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
        color: var(--accent-color);
      }

      50% {
        bottom: 0.2em;
        color: var(--accent-color);
      }

      100% {
        bottom: 0;
        opacity: 1;
        color: var(--primary-color);
      }
    }
  `;
  document.head.appendChild(style);
}

// Sélectionne les éléments de texte à animer
let competenceAnimatedTexts = document.querySelectorAll('.ml2[data-text="Compétences"]');
let contactAnimatedTexts = document.querySelectorAll('.ml2[data-text="Contact"]');
let aboutAnimatedTexts = document.querySelectorAll('.ml2[data-text="A propos"]');

const checkAndInit = (animatedTexts) => {
  if (animatedTexts.length > 0 && !animatedTexts[0].querySelector('span[aria-label]')) {
    init(animatedTexts);
  }
};

const checkAndRemove = (animatedTexts) => {
  if (animatedTexts.length > 0 && animatedTexts[0].querySelector('span[aria-label]')) {
    animatedTexts[0].querySelector('span[aria-label]').remove();
  }
};

const competenceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        checkAndInit(competenceAnimatedTexts);
      } else {
        checkAndRemove(competenceAnimatedTexts);
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
        checkAndInit(contactAnimatedTexts);
      } else {
        checkAndRemove(contactAnimatedTexts);
      }
    });
  },
  {
    rootMargin: '-50px 0px',
    threshold: 0,
  }
);

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        checkAndInit(aboutAnimatedTexts);
      } else {
        checkAndRemove(aboutAnimatedTexts);
      }
    });
  },
  {
    rootMargin: '-50px 0px',
    threshold: 0,
  }
);

// Observe les éléments pour déclencher les animations
competenceObserver.observe(document.getElementById('competence'));
contactObserver.observe(document.getElementById('contact'));
aboutObserver.observe(document.getElementById('about'));
}

export default textWrapper;