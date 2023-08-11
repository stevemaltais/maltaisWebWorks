import menu from './menu';
import scroll from './scroll';
import progessBar from './progressBare';
import handleNavBar from './navBar';

import {initContactForm } from './contactForm';
import textScriptor from './textScriptor';
import textWrapper from './textWrapper';
import methode from './setupPage';

import '../styles/main.scss';
import observer from './observer';



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
scroll();
handleNavBar();




