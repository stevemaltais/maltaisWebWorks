import menu from './menu';
import initializeScroll from './scroll';  // Assurez-vous que le chemin est correct
import progessBar from './progressBare';
import { initContactForm } from './contactForm';
import textScriptor from './textScriptor';
import textWrapper from './textWrapper';
import methode from './setupPage';
import observer from './observer';

import '../styles/main.scss';

// Initialisation de Locomotive Scroll
const scroll = initializeScroll();

// Fonction pour gérer le clic sur un élément d'ancrage
function handleAnchorClick(event) {
    event.preventDefault();  // Empêche le comportement par défaut de l'ancrage

    const targetID = event.currentTarget.getAttribute('href').substring(1);  // Extrait l'ID cible de l'attribut href
    const targetElement = document.getElementById(targetID);  // Trouve l'élément cible dans le DOM

    const offset = 75; 

    // Utilise la méthode scrollTo de Locomotive Scroll pour se déplacer vers l'élément cible
    scroll.scrollTo(targetElement, { offset: -offset });
}

// Sélectionne tous les éléments d'ancrage et ajoute un écouteur d'événements pour chacun d'entre eux
const anchorElements = document.querySelectorAll('a[href^="#"]');
anchorElements.forEach(anchor => {
    anchor.addEventListener('click', handleAnchorClick);
});

// Importe toutes les images du dossier './assets'
const imagesContext = require.context('../assets', false, /\.(png|svg|jpg|jpeg|gif)$/);
const images = imagesContext.keys().map(imagesContext);

// Fonction pour créer un élément d'image à partir d'une source
function createImageElement(src) {
  const imgElement = document.createElement('img');
  imgElement.src = src;
  return imgElement;
}


textWrapper();
observer();
methode();
textScriptor();
progessBar();
initContactForm();
menu();

