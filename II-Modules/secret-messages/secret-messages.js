/* secret-messages.js */

import { toggleHiddenElement, changeToFunkyColor } from "../modules/dom-functions.js";

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
const anotherButtonElement = document.getElementById('another-button')
const pElement2 = document.getElementById('another-secret');


buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

anotherButtonElement.addEventListener('click', () => {
  toggleHiddenElement(buttonElement);
  toggleHiddenElement(pElement2);
  changeToFunkyColor(anotherButtonElement);
});