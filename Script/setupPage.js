document.addEventListener('DOMContentLoaded', function () {
  const colorPalette = document.getElementById('color-palette');
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const body = document.querySelector('body');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
  });

  body.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove('active');
    }
  });
  const colorMap = {
    'rgb(100, 255, 110)': 'rgb(207, 124, 245)',
    'rgb(255, 100, 245)': 'rgb(111, 136, 227)',
    'rgb(100, 100, 255)': 'rgb(111, 227, 223)',
    'rgb(232, 255, 100)': 'rgb(64, 163, 120)',
    // Ajoutez les 8 autres correspondances pour les 8 autres couleurs sélectionnées
  };
  
  colorPalette.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
      const selectedColor = getComputedStyle(event.target).getPropertyValue('background-color');
      document.documentElement.style.setProperty('--light-pink', selectedColor);
    
      const progressElements = document.querySelectorAll('.progress');
      const progressColor = colorMap[selectedColor] || '--light-pink';
    
      progressElements.forEach(function(progressElement) {
        progressElement.style.backgroundColor = progressColor;
      });
    }
  });
  });
  
  const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', function (event) {
  event.preventDefault();
  document.documentElement.style.setProperty('--light-pink', '#64d8ff');
  const progressElements = document.querySelectorAll('.progress');
  progressElements.forEach(function(progressElement) {
    progressElement.style.backgroundColor = "#f58f7c";
  });
});
  