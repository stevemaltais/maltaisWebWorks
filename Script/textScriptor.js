const phrases = ['Développeur web', 'Développeur logiciel','Développeur full stack', 'Designer graphique', 'Freelancer'];
const delay = 50;
const pause = 500;

let phraseIndex = 0;
let charIndex = 0;
let cursorVisible = true;
let targetElement = document.querySelector('.animated-text');
let typingForward = true;
let elapsedTime = 0;
let currentDelay = delay;

function type(timestamp) {
  if (!elapsedTime) {
    elapsedTime = timestamp;
  }

  const deltaTime = timestamp - elapsedTime;

  if (deltaTime >= currentDelay) {
    elapsedTime = timestamp;

    if (charIndex <= phrases[phraseIndex].length && typingForward) {
      targetElement.innerHTML = phrases[phraseIndex].slice(0, charIndex) + (cursorVisible && charIndex !== phrases[phraseIndex].length ? '|' : '');
      if (charIndex === phrases[phraseIndex].length) {
        typingForward = false;
        currentDelay = pause;
      } else {
        charIndex++;
        cursorVisible = !cursorVisible;
        currentDelay = delay;
      }
    } else if (charIndex >= 0 && !typingForward) {
      targetElement.innerHTML = phrases[phraseIndex].slice(0, charIndex) + (cursorVisible ? '|' : '');
      if (charIndex === 0) {
        typingForward = true;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        currentDelay = pause;
      } else {
        charIndex--;
        cursorVisible = !cursorVisible;
        currentDelay = delay;
      }
    }
  }

  requestAnimationFrame(type);
}

requestAnimationFrame(type);