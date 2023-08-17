function menu() {

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");



closeBtn.addEventListener("click", ()=>{ 
  sidebar.classList.toggle("open");
  menuBtnChange(); 
  
  let logo = document.querySelector(".logo_name");
  logo.classList.toggle("rotate"); 
});

function menuBtnChange() {
  let body = document.querySelector('body');
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    body.style.overflow = 'hidden'; // Désactive le défilement lorsque le menu est ouvert
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    body.style.overflow = 'auto'; // Réactive le défilement lorsque le menu est fermé
  }
}
}
export default menu;
