// Sélectionner le menu principal et les éléments de menu
const mainMenu = document.querySelector('.main-menu');
const menuItems = document.querySelectorAll('.main-menu li');

// Ajouter un écouteur d'événement au menu principal pour afficher/masquer les sous-menus
mainMenu.addEventListener('click', event => {
  // Vérifier si l'élément cliqué est un élément de menu
  if (event.target.closest('li')) {
    // Récupérer l'élément de menu cliqué et le sous-menu correspondant
    const menuItem = event.target.closest('li');
    const subMenu = menuItem.querySelector('.sub-menu');

    // Vérifier si le sous-menu est déjà affiché
    const isOpen = menuItem.classList.contains('open');

    // Masquer tous les sous-menus
    menuItems.forEach(item => item.classList.remove('open'));

    // Afficher/masquer le sous-menu correspondant
    if (!isOpen && subMenu) {
      menuItem.classList.add('open');
    }
  }
});

// Ajouter un écouteur d'événement à la fenêtre pour masquer les sous-menus lorsqu'on clique à l'extérieur
window.addEventListener('click', event => {
  if (!event.target.closest('.main-menu')) {
    menuItems.forEach(item => item.classList.remove('open'));
  }
});



