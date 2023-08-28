
function methode(){

  document.addEventListener('DOMContentLoaded', function () {
    const colorPalette = document.getElementById('color-palette');
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const body = document.querySelector('body');
    const sidebar = document.querySelector(".sidebar");
  
    // Ajuster la position du menu en fonction de l'état de la sidebar
    function adjustMenuPosition() {
      if(sidebar.classList.contains("open")){
        menu.style.left = "190px";
      } else {
        menu.style.left = "20px";
      }
    }
  
    // Initialiser l'état du menu
    menu.classList.add('inactive');
    adjustMenuPosition();
  
    menuToggle.addEventListener('click', function () {
      if (menu.classList.contains('inactive')) {
        menu.classList.remove('inactive');
        menu.classList.add('active');
      } else {
        menu.classList.remove('active');
        menu.classList.add('inactive');
      }
      adjustMenuPosition();
    });
  
    body.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && !menuToggle.contains(event.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
        menu.classList.add('inactive');
      }
    });
  
    // Observer les changements de classe de la sidebar
    new MutationObserver(adjustMenuPosition)
      .observe(sidebar, { attributes: true, attributeFilter: ['class'] });
  const colorMap = {
    'rgb(100, 255, 110)': 'rgb(207, 124, 245)',
    'rgb(255, 100, 245)': 'rgb(111, 136, 227)',
    'rgb(100, 100, 255)': 'rgb(111, 227, 223)',
    'rgb(232, 255, 100)': 'rgb(64, 163, 120)',
  
  };
  
  colorPalette.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
      const selectedColor = getComputedStyle(event.target).getPropertyValue('background-color');
      document.documentElement.style.setProperty('--accent-color', selectedColor);
    
      const progressElements = document.querySelectorAll('.progress');
      const progressColor = colorMap[selectedColor] || '--accent-color';
    
      progressElements.forEach(function(progressElement) {
        progressElement.style.backgroundColor = progressColor;
      });
    }
  });
  });
  
  const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', function (event) {
  event.preventDefault();
  document.documentElement.style.setProperty('--accent-color', '#64d8ff');
  const progressElements = document.querySelectorAll('.progress');
  progressElements.forEach(function(progressElement) {
    progressElement.style.backgroundColor = "#f58f7c";
  });
});
}
export default methode;