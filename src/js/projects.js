import artInspo from "./../assets/images/art-inspo.gif";
import planetAger from "./../assets/images/planet-age.gif";
import prioritime from "./../assets/images/prioritime2.gif";

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

  createCards(main, "Art Inspirer", artInspo, "https://github.com/emmalgs/art-inspiration", "Enter a 'vibe' to see related art from the Art Institute of Chicago");
  createCards(main, "Planetary Ager", planetAger, "https://github.com/emmalgs/space-age-calculator", "Type in your age to see how old you are on other planets");
  createCards(main, "PrioriTime", prioritime, "https://github.com/emmalgs/prioritime", "Epicodus JavaScript Team Week Project");
}

function createCards(mainDiv, title, imageSrc, link, description) {
  const cardDiv = document.createElement("div");
  cardDiv.classList = "card";
  const a = document.createElement("a");
  a.href = link;
  a.target = "_blank";
  cardDiv.append(a);

  const cardTitle = document.createElement("h5");
  cardTitle.innerText = title;

  const imageDiv = document.createElement("div");
  imageDiv.classList = "project-image";
  const image = document.createElement("img");
  image.src = imageSrc;
  imageDiv.append(image);
  
  const infoDiv = document.createElement("div");
  infoDiv.classList = "project-info";
  const p = document.createElement("p");
  p.innerText = description;
  infoDiv.append(p);

  a.append(cardTitle, imageDiv, infoDiv);
  mainDiv.append(cardDiv);
}