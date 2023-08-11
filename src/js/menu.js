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
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
 }
}
}
export default menu;
