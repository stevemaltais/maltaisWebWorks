// Obtenir la modale
var modal = document.getElementById("myModal");

// Obtenir le bouton qui ouvre la modale
var btn = document.getElementsByClassName("btn")[0];

// Obtenir le bouton de fermeture de la modale
var span = document.getElementsByClassName("close")[0];

// Fonction pour ouvrir la modale
function openModal() {
  modal.style.display = "block";
}

// Fonction pour fermer la modale
function closeModal() {
  modal.style.display = "none";
}

// Fermer la modale lorsque l'utilisateur clique en dehors de celle-ci
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};