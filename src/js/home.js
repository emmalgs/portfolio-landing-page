import renderProjects from "./projects";

export function links(){
  document.querySelector("#projects-link").addEventListener("click", renderProjects);
}

export default function renderHome(){
  links();
  const nav = document.querySelector("#nav");
  nav.classList = "nav";
  nav.classList.remove("nav-top");
  const ul = nav.querySelector("ul");
  ul.classList.remove("nav-top");

  const main = document.querySelector("#main");
  main.classList = "main-container";

  const blue = document.createElement("div");
  const green = document.createElement("div");
  const red = document.createElement("div");
  const yellow = document.createElement("div");
  const lightBlue = document.createElement("div");

  blue.classList = "blue";
  green.classList = "green";
  red.classList = "red";
  yellow.classList = "yellow";
  lightBlue.classList = "light-blue";

  main.append(blue, green, red, yellow, lightBlue);
}