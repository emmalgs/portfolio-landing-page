import { links, renderTopNav, clearMain, setMainClass, setContainerClass, clearBlockStyle } from "./render";
import artInspo from "./../assets/images/art-inspo.gif";
import planetAger from "./../assets/images/planet-age.gif";
import prioritime from "./../assets/images/prioritime2.gif";
import currency from "./../assets/images/currency.gif";
import pizza from "./../assets/images/pizza.gif";
import bakery from "./../assets/images/bakery.gif";


export default function renderProjects(){
  links();
  renderTopNav();
  clearMain();
  setMainClass("card-container");
  setContainerClass("project-container");
  clearBlockStyle();

  createCards("Art Inspirer", artInspo, "https://github.com/emmalgs/art-inspiration", "Enter a 'vibe' to see related art from the Art Institute of Chicago");
  createCards("Planetary Ager", planetAger, "https://github.com/emmalgs/space-age-calculator", "Type in your age to see how old you are on other planets");
  createCards("PrioriTime", prioritime, "https://github.com/emmalgs/prioritime", "Epicodus JavaScript Team Week Project");
  createCards("Currency Exchange", currency, "https://github.com/emmalgs/currency-exchange", "Currency exchange utilizing APIs to access up-to-date global exchange rates");
  createCards("Bucky's One Stop Pizza Shop", pizza, "https://github.com/emmalgs/make-a-pizza", "Build a pizza and add it to your order. Be warned, the chef is indeed a guinea pig.");
  createCards("Ze Bakery", bakery, "https://github.com/emmalgs/Bakery.Solution", "C# console application");
}

function createCards(title, imageSrc, link, description) {
  const mainDiv = document.querySelector("#main");
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