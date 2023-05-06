import renderHome from './js/home';
import renderProjects from './js/projects';
import renderAbout from './js/about';
import './css/styles.css';

window.addEventListener("load", function(){
  document.querySelector(".header").addEventListener("click", renderHome);
  document.querySelector("#projects-link").addEventListener("click", renderProjects);
  document.querySelector("#about-link").addEventListener("click", renderAbout);
});