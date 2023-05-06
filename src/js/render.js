import renderAbout from "./about";
import renderProjects from "./projects";
import renderHome from "./home";

export function links(){
  document.querySelector(".header").addEventListener("click", renderHome);
  document.querySelector("#projects-link").addEventListener("click", renderProjects);
  document.querySelector("#about-link").addEventListener("click", renderAbout);
}

export function renderTopNav() {
  const nav = document.querySelector("#nav");
  nav.classList = "nav-top";
  nav.classList.remove("nav");
  const ul = nav.querySelector("ul");
  ul.classList = "nav-top";
}

export function renderHomeNav() {
  const nav = document.querySelector("#nav");
  nav.classList = "nav";
  nav.classList.remove("nav-top");
  nav.querySelector("ul").removeAttribute("class");
}

export function clearMain() {
  const main = document.querySelector("#main");
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

export function setMainClass(className) {
  const main = document.querySelector("#main");
  main.removeAttribute("class");
  main.classList = className;
}

export function setContainerClass(className) {
  const container = document.querySelector("#container");
  container.removeAttribute("class");
  container.classList = className;
}

export function clearBlockStyle() {
  if (document.querySelector(".color-block"))
  {
    document.querySelector(".color-block").remove();
  }
}