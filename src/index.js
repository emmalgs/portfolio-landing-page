import renderHome from './js/home';
import { links } from './js/home';
import './css/styles.css';

window.addEventListener("load", function(){
  links();
  document.querySelector(".header").addEventListener("click", renderHome);
});