window.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
  
    content.style.display = "block";
  
    setTimeout(function () {
      preloader.style.opacity = "0";
      setTimeout(function () {
        preloader.style.display = "none";
      }, 1000);
    },1120);
  });