export default function renderProjects(){
  const nav = document.querySelector("#nav");
  nav.classList = "nav-top";
  nav.classList.remove("nav");
  const ul = nav.querySelector("ul");
  ul.classList = "nav-top";

  const main = document.querySelector("#main");
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  main.classList = "card-container";
  main.classList.remove("main-container");

}
